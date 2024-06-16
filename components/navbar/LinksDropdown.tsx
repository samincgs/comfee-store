import { links } from '@/utils/links';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserIcon from './UserIcon';
import Link from 'next/link';
import { SignedOut, SignedIn, SignInButton, SignUpButton } from '@clerk/nextjs';
import SignOutLink from './SignOutLink';
import { auth } from '@clerk/nextjs/server';

const LinksDropdown = () => {
  const { userId } = auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} className='flex items-center gap-4'>
          <Menu className='w-4 h-4' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
        <SignedIn>
          {links.map((link) => {
            if (link.label === 'Dashboard' && !isAdmin) return null;
            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href}>
                  <p>{link.label}</p>
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>Sign in</SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode='modal'>Register</SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropdown;
