import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

const AuthCallbackPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { refreshAuthState } = useAuth();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const errorParam = searchParams.get('error');
        const userParam = searchParams.get('user');

        if (errorParam) {
          setError(decodeURIComponent(errorParam));
          setStatus('error');
          return;
        }

        // With cookie-based auth, the backend should have already set the cookie
        // We just need to verify the authentication worked
        
        if (userParam) {
          // Optional: Parse user data from URL if backend provides it
          const userData = JSON.parse(decodeURIComponent(userParam));
          console.log('User data from callback:', userData);
        }

        // Verify authentication by making a test API call
        // The cookie should be automatically included
        const response = await fetch(`${import.meta.env.VITE_BACKEND_AUTH_URL || 'http://localhost:5000/auth'}/verify`, {
          method: 'GET',
          credentials: 'include', // CRITICAL: Include cookies
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          setStatus('success');
          // Refresh auth state to update the context
          await refreshAuthState();
          
          // Redirect to home after brief success display
          setTimeout(() => {
            navigate('/', { replace: true });
          }, 1500);
        } else {
          throw new Error('Authentication verification failed');
        }

      } catch (err) {
        console.error('Auth callback error:', err);
        setError(err instanceof Error ? err.message : 'Authentication failed');
        setStatus('error');
      }
    };

    handleCallback();
  }, [navigate, searchParams, refreshAuthState]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        {status === 'loading' && (
          <>
            <Loader2 className="w-8 h-8 animate-spin text-blue-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Completing Sign In</h2>
            <p className="text-slate-300">Please wait while we verify your authentication...</p>
          </>
        )}
        
        {status === 'success' && (
          <>
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Sign In Successful!</h2>
            <p className="text-slate-300">Redirecting you to the homepage...</p>
          </>
        )}
        
        {status === 'error' && (
          <>
            <XCircle className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Sign In Failed</h2>
            <p className="text-slate-300">{error}</p>
            <button 
              onClick={() => navigate('/', { replace: true })}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Go to Homepage
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCallbackPage;