'use client';

import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import { useState } from "react";

export function FacebookLoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleFacebookLogin = async () => {
    try {
      setIsLoading(true);
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/facebook`;
    } catch (error) {
      console.error('Facebook login error:', error);
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleFacebookLogin}
      className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white"
      disabled={isLoading}
    >
      <Facebook className="w-5 h-5 mr-2" />
      {isLoading ? 'Connecting...' : 'Continue with Facebook'}
    </Button>
  );
}