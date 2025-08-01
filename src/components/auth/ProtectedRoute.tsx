import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { LoginModal } from './LoginModal';
import { Loader2, Lock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  requireAuth?: boolean;
  showLoginPrompt?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  fallback,
  requireAuth = true,
  showLoginPrompt = true
}) => {
  const { isAuthenticated, isLoading, user, error } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  // Auto-show login modal if authentication is required and user is not authenticated
  useEffect(() => {
    if (requireAuth && !isLoading && !isAuthenticated && showLoginPrompt && !hasPrompted) {
      setShowLoginModal(true);
      setHasPrompted(true);
    }
  }, [requireAuth, isLoading, isAuthenticated, showLoginPrompt, hasPrompted]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-400 mx-auto mb-4" />
          <p className="text-slate-300">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // If authentication is not required, always render children
  if (!requireAuth) {
    return <>{children}</>;
  }

  // If authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    // Show custom fallback if provided
    if (fallback) {
      return <>{fallback}</>;
    }

    // Default protection UI
    return (
      <>
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-800">
              <Lock className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              
              <h2 className="text-2xl font-bold text-white mb-4">
                Authentication Required
              </h2>
              
              <p className="text-slate-300 mb-6">
                Please sign in to access this content and track your learning progress.
              </p>

              {error && (
                <Alert className="mb-6 bg-red-900/20 border-red-500/30">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                  <AlertDescription className="text-red-300">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                <Button
                  onClick={() => setShowLoginModal(true)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Sign In to Continue
                </Button>
                
                <p className="text-xs text-slate-400">
                  Secure authentication with Google or GitHub
                </p>
              </div>
            </div>
          </div>
        </div>

        <LoginModal 
          isOpen={showLoginModal} 
          onClose={() => setShowLoginModal(false)} 
        />
      </>
    );
  }

  // User is authenticated, render children
  return <>{children}</>;
};

// Higher-order component for easier use
export const withProtectedRoute = <P extends object>(
  Component: React.ComponentType<P>,
  options?: {
    requireAuth?: boolean;
    showLoginPrompt?: boolean;
  }
) => {
  const ProtectedComponent: React.FC<P> = (props) => (
    <ProtectedRoute 
      requireAuth={options?.requireAuth}
      showLoginPrompt={options?.showLoginPrompt}
    >
      <Component {...props} />
    </ProtectedRoute>
  );

  ProtectedComponent.displayName = `withProtectedRoute(${Component.displayName || Component.name})`;
  
  return ProtectedComponent;
};

export default ProtectedRoute;