import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useCustomSelector } from '@/hooks/reduxHooks';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { accessToken } = useCustomSelector((state) => state.userSlice);

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default AuthGuard;
