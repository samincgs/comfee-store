import { Input } from '../ui/input';

const NavSearch = () => {
  return (
    <Input
      type='text'
      className='max-w-sm dark:bg-secondary'
      placeholder='search product...'
      required
    />
  );
};
export default NavSearch;
