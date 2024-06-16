'use client';

import { usePathname } from 'next/navigation';
import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <nav>
      {adminLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Button
            key={link.href}
            variant={isActive ? 'default' : 'ghost'}
            asChild
            className='flex flex-col items-start mb-2'
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </nav>
  );
};
export default Sidebar;
