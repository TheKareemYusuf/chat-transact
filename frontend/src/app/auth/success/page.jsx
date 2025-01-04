'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const AuthSuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken && refreshToken) {
      // Store tokens in localStorage or secure storage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      
      // Redirect to messages page
      router.push('/messages');
    }
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">Logging you in...</h1>
        <p className="text-gray-500">Please wait while we complete the authentication.</p>
      </div>
    </div>
  );
}

const AuthSuccessPageWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
      <AuthSuccessPage />
  </Suspense>
);

export default AuthSuccessPageWrapper;