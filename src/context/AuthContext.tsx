import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AuthContextType, AuthState, User } from '../types/auth';
import { authService } from '../services/authService';

const initialAuthState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(initialAuthState);

  // Initialize authentication state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

        // Check if authentication is enabled
        if (!authService.isAuthEnabled()) {
          setAuthState(prev => ({ 
            ...prev, 
            isLoading: false,
            isAuthenticated: false,
            user: null,
            token: null
          }));
          return;
        }

        // Check for existing valid token
        if (authService.isTokenValid()) {
          const token = authService.getToken();
          const user = await authService.getCurrentUser();

          if (user && token) {
            setAuthState({
              user,
              token,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });

            // Setup automatic token refresh
            authService.setupTokenRefresh();
            return;
          }
        }

        // No valid authentication found
        setAuthState(prev => ({
          ...prev,
          isLoading: false,
          isAuthenticated: false,
          user: null,
          token: null,
        }));

      } catch (error) {
        console.error('Auth initialization failed:', error);
        setAuthState(prev => ({
          ...prev,
          isLoading: false,
          isAuthenticated: false,
          user: null,
          token: null,
          error: error instanceof Error ? error.message : 'Authentication initialization failed',
        }));
      }
    };

    initializeAuth();
  }, []);

  // Handle authentication callback (for OAuth redirects)
  useEffect(() => {
    const handleAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      const error = urlParams.get('error');
      const state = urlParams.get('state');

      if (error) {
        setAuthState(prev => ({
          ...prev,
          error: decodeURIComponent(error),
          isLoading: false,
        }));
        
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
        return;
      }

      if (token) {
        try {
          setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
          
          const user = await authService.handleAuthCallback(token, state || undefined);
          
          setAuthState({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });

          // Setup automatic token refresh
          authService.setupTokenRefresh();

          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);

        } catch (error) {
          console.error('Auth callback failed:', error);
          setAuthState(prev => ({
            ...prev,
            error: error instanceof Error ? error.message : 'Authentication failed',
            isLoading: false,
            isAuthenticated: false,
            user: null,
            token: null,
          }));

          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      }
    };

    // Only handle callback if we're on the callback route or have auth params
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('token') || urlParams.has('error')) {
      handleAuthCallback();
    }
  }, []);

  const login = (provider: 'google' | 'github') => {
    try {
      setAuthState(prev => ({ ...prev, error: null, isLoading: true }));
      
      if (provider === 'google') {
        authService.initiateGoogleLogin();
      } else if (provider === 'github') {
        authService.initiateGitHubLogin();
      }
    } catch (error) {
      console.error('Login initiation failed:', error);
      setAuthState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Login failed to start',
        isLoading: false,
      }));
    }
  };

  const logout = async () => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      await authService.logout();
      
      setAuthState({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });

    } catch (error) {
      console.error('Logout failed:', error);
      
      // Even if backend logout fails, clear local state
      setAuthState({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Logout failed',
      });
    }
  };

  const clearError = () => {
    setAuthState(prev => ({ ...prev, error: null }));
  };

  const refreshToken = async () => {
    try {
      const newToken = await authService.refreshToken();
      
      if (newToken) {
        const user = await authService.getCurrentUser();
        
        if (user) {
          setAuthState(prev => ({
            ...prev,
            token: newToken,
            user,
            isAuthenticated: true,
            error: null,
          }));
        }
      } else {
        // Refresh failed, logout user
        await logout();
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      await logout();
    }
  };

  const contextValue: AuthContextType = {
    ...authState,
    login,
    logout,
    clearError,
    refreshToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;