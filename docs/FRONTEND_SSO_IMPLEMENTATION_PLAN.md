# Frontend SSO Implementation Plan

## 🎯 Overview

This plan outlines how to implement secure cookie-based authentication in your frontend application to work with the backend SSO system. The backend stores JWT tokens in secure HTTP-only cookies, so the frontend doesn't need to manage tokens directly.

## 🏗️ Architecture Overview

```
1. User clicks "Login with Google/GitHub"
2. Frontend redirects to backend: /auth/google or /auth/github
3. Backend handles OAuth flow and sets secure cookie
4. Backend redirects to: FRONTEND_URL/auth/callback?user=...
5. Frontend processes callback and makes authenticated requests
6. All API requests automatically include the secure cookie
```

## 📋 Implementation Steps

### Phase 1: Authentication Flow Setup

#### 1.1 Login Buttons/Links
**File**: `components/Login.tsx` or `pages/login.tsx`

```jsx
const LoginPage = () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
  
  const handleGoogleLogin = () => {
    // Redirect to backend OAuth endpoint
    window.location.href = `${backendUrl}/auth/google`;
  };
  
  const handleGitHubLogin = () => {
    // Redirect to backend OAuth endpoint
    window.location.href = `${backendUrl}/auth/github`;
  };
  
  return (
    <div>
      <button onClick={handleGoogleLogin}>
        Login with Google
      </button>
      <button onClick={handleGitHubLogin}>
        Login with GitHub
      </button>
    </div>
  );
};
```

#### 1.2 OAuth Callback Handler
**File**: `pages/auth/callback.tsx` or `app/auth/callback/page.tsx`

```jsx
'use client'; // if using Next.js 13+ app directory

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // or 'next/navigation' for app directory

const AuthCallback = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const userDataParam = urlParams.get('user');
        const errorParam = urlParams.get('error');
        
        if (errorParam) {
          setError(errorParam);
          setLoading(false);
          return;
        }
        
        if (userDataParam) {
          // Parse user data from URL parameter
          const userData = JSON.parse(decodeURIComponent(userDataParam));
          
          // Verify authentication by making a test API call
          // The secure cookie is automatically included
          const response = await fetch('/api/auth/verify', {
            method: 'GET',
            credentials: 'include', // CRITICAL: This sends the cookie
          });
          
          if (response.ok) {
            const data = await response.json();
            
            // Store user data in your state management system
            // (Redux, Zustand, Context, etc.)
            localStorage.setItem('user', JSON.stringify(userData));
            
            // Redirect to dashboard or intended page
            router.push('/dashboard');
          } else {
            setError('Authentication verification failed');
          }
        } else {
          setError('No user data received');
        }
      } catch (err) {
        setError('Authentication processing failed');
        console.error('Auth callback error:', err);
      } finally {
        setLoading(false);
      }
    };
    
    handleCallback();
  }, [router]);
  
  if (loading) {
    return <div>Processing authentication...</div>;
  }
  
  if (error) {
    return (
      <div>
        <h2>Authentication Error</h2>
        <p>{error}</p>
        <button onClick={() => router.push('/login')}>
          Try Again
        </button>
      </div>
    );
  }
  
  return <div>Redirecting...</div>;
};

export default AuthCallback;
```

### Phase 2: API Integration

#### 2.1 HTTP Client Configuration
**File**: `lib/api.ts` or `utils/api.ts`

```typescript
// Option A: Using fetch wrapper
class ApiClient {
  private baseURL: string;
  
  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
  }
  
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include', // CRITICAL: Always include cookies
      ...options,
    };
    
    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
  
  // GET request
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }
  
  // POST request
  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }
  
  // PUT request
  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }
  
  // DELETE request
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();

// Option B: Using Axios (if you prefer)
import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000',
  withCredentials: true, // CRITICAL: Always send cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Axios interceptors for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

#### 2.2 Authentication API Functions
**File**: `lib/auth.ts`

```typescript
import { apiClient } from './api';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  provider: 'google' | 'github';
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  error?: string;
  message?: string;
}

export const authApi = {
  // Verify current authentication status
  async verifyAuth(): Promise<AuthResponse> {
    try {
      return await apiClient.get<AuthResponse>('/auth/me');
    } catch (error) {
      return { success: false, error: 'Verification failed' };
    }
  },
  
  // Get current user profile
  async getCurrentUser(): Promise<AuthResponse> {
    try {
      return await apiClient.get<AuthResponse>('/auth/me');
    } catch (error) {
      return { success: false, error: 'Failed to get user' };
    }
  },
  
  // Get detailed user profile
  async getUserProfile(): Promise<AuthResponse> {
    try {
      return await apiClient.get<AuthResponse>('/auth/profile');
    } catch (error) {
      return { success: false, error: 'Failed to get profile' };
    }
  },
  
  // Logout user
  async logout(): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>('/auth/logout');
      
      // Clear any local user data
      localStorage.removeItem('user');
      
      return response;
    } catch (error) {
      return { success: false, error: 'Logout failed' };
    }
  },
  
  // Refresh token (if needed)
  async refreshToken(): Promise<AuthResponse> {
    try {
      return await apiClient.post<AuthResponse>('/auth/refresh');
    } catch (error) {
      return { success: false, error: 'Token refresh failed' };
    }
  }
};
```

### Phase 3: State Management

#### 3.1 Authentication Context (React Context)
**File**: `contexts/AuthContext.tsx`

```tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { authApi, User } from '../lib/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (provider: 'google' | 'github') => void;
  logout: () => Promise<void>;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const isAuthenticated = !!user;
  
  // Check authentication status on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);
  
  const checkAuthStatus = async () => {
    try {
      setIsLoading(true);
      
      // Try to get user from localStorage first (for faster UI updates)
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      
      // Verify with backend
      const response = await authApi.verifyAuth();
      
      if (response.success && response.user) {
        setUser(response.user);
        localStorage.setItem('user', JSON.stringify(response.user));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
      localStorage.removeItem('user');
    } finally {
      setIsLoading(false);
    }
  };
  
  const login = (provider: 'google' | 'github') => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
    window.location.href = `${backendUrl}/auth/${provider}`;
  };
  
  const logout = async () => {
    try {
      await authApi.logout();
      setUser(null);
      localStorage.removeItem('user');
      
      // Redirect to login page
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  
  const refreshAuth = async () => {
    await checkAuthStatus();
  };
  
  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
    refreshAuth,
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
```

#### 3.2 Alternative: Zustand Store (if using Zustand)
**File**: `stores/authStore.ts`

```typescript
import { create } from 'zustand';
import { authApi, User } from '../lib/auth';

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
  // Actions
  login: (provider: 'google' | 'github') => void;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  
  login: (provider) => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
    window.location.href = `${backendUrl}/auth/${provider}`;
  },
  
  logout: async () => {
    try {
      await authApi.logout();
      set({ user: null, isAuthenticated: false });
      localStorage.removeItem('user');
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  },
  
  checkAuth: async () => {
    try {
      set({ isLoading: true });
      
      // Check localStorage first
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        set({ user, isAuthenticated: true });
      }
      
      // Verify with backend
      const response = await authApi.verifyAuth();
      
      if (response.success && response.user) {
        set({ user: response.user, isAuthenticated: true });
        localStorage.setItem('user', JSON.stringify(response.user));
      } else {
        set({ user: null, isAuthenticated: false });
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      set({ user: null, isAuthenticated: false });
    } finally {
      set({ isLoading: false });
    }
  },
  
  setUser: (user) => {
    set({ user, isAuthenticated: !!user });
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  },
}));
```

### Phase 4: Route Protection

#### 4.1 Protected Route Component
**File**: `components/ProtectedRoute.tsx`

```tsx
'use client';

import { useAuth } from '../contexts/AuthContext';
// or import { useAuthStore } from '../stores/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  fallback 
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  // or const { isAuthenticated, isLoading } = useAuthStore();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return fallback || <div>Please log in to access this page.</div>;
  }
  
  return <>{children}</>;
};
```

#### 4.2 Usage in Pages
**File**: `pages/dashboard.tsx` or `app/dashboard/page.tsx`

```tsx
import { ProtectedRoute } from '../components/ProtectedRoute';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <ProtectedRoute>
      <div>
        <h1>Welcome, {user?.name}!</h1>
        <p>Email: {user?.email}</p>
        <p>Provider: {user?.provider}</p>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
```

### Phase 5: API Usage Examples

#### 5.1 Making Authenticated API Calls
**File**: `components/UserProfile.tsx`

```tsx
import { useEffect, useState } from 'react';
import { apiClient } from '../lib/api';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Cookie is automatically included
        const response = await apiClient.get('/auth/profile');
        
        if (response.success) {
          setProfile(response.profile);
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, []);
  
  if (loading) return <div>Loading profile...</div>;
  
  return (
    <div>
      <h2>User Profile</h2>
      {/* Render profile data */}
    </div>
  );
};
```

#### 5.2 Making API Calls to Protected Endpoints
**File**: `components/LabContent.tsx`

```tsx
import { useEffect, useState } from 'react';
import { apiClient } from '../lib/api';

const LabContent = ({ labUrl }: { labUrl: string }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchLabContent = async () => {
      try {
        // This endpoint uses @optional_jwt decorator
        // Cookie authentication provides user context if logged in
        const response = await apiClient.get('/api/v1/lab/content', {
          headers: {
            'X-Lab-Url': labUrl,
          },
        });
        
        setContent(response.data);
      } catch (error) {
        console.error('Failed to fetch lab content:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLabContent();
  }, [labUrl]);
  
  return (
    <div>
      {/* Render lab content */}
    </div>
  );
};
```

## ⚙️ Environment Configuration

### `.env.local` (Next.js) or `.env` (React/Vite)
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
# For production:
# NEXT_PUBLIC_BACKEND_URL=https://your-backend-domain.com
```

## 🔧 Next.js Specific Configuration

### `next.config.js` (if needed for CORS/proxy)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/:path*`,
      },
      {
        source: '/auth/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
```

## 📱 Mobile App Considerations (React Native)

If building a mobile app, cookie handling is different:

```typescript
// Use react-native-cookies or @react-native-cookies/cookies
import CookieManager from '@react-native-cookies/cookies';

// Configure fetch to handle cookies
const apiCall = async () => {
  const cookies = await CookieManager.get('your-backend-domain.com');
  
  const response = await fetch('your-api-endpoint', {
    credentials: 'include',
    // Additional mobile-specific headers if needed
  });
};
```

## 🚀 Deployment Considerations

### Production Checklist:
- [ ] Set correct `NEXT_PUBLIC_BACKEND_URL` for production
- [ ] Ensure HTTPS is enabled (required for secure cookies)
- [ ] Configure CORS properly on backend
- [ ] Test cookie domain settings
- [ ] Verify authentication flow end-to-end

## 🔒 Security Best Practices

1. **Always use `credentials: 'include'`** in fetch requests
2. **Never store JWT tokens in localStorage** (backend handles this via cookies)
3. **Always use HTTPS in production** (required for secure cookies)
4. **Handle authentication errors gracefully** (redirect to login)
5. **Clear user data on logout** (localStorage cleanup)

## 🧪 Testing

### Test Authentication Flow:
1. Test login with both Google and GitHub
2. Test protected routes access
3. Test logout functionality
4. Test token expiration handling
5. Test authentication persistence across browser sessions

This implementation provides a secure, user-friendly authentication system that leverages HTTP-only cookies for maximum security while maintaining a smooth user experience!