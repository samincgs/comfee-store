import Container from '../global/Container';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';
import { Suspense } from 'react';

const Navbar = () => {
  return (
    <div className='border-b'>
      <Container className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6'>
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className='flex items-center gap-4'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
