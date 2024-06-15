'use client';

import { useToast } from '@/components/ui/use-toast';
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

const SignOutLink = () => {
  const { toast } = useToast();
  const handleSignOut = () => {
    toast({
      description: 'You have been signed out',
    });
  };

  return (
    <SignOutButton>
      <Link href='/' onClick={handleSignOut}>
        Sign out
      </Link>
    </SignOutButton>
  );
};
export default SignOutLink;
