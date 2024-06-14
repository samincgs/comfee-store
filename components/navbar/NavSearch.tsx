import { Input } from '../ui/input';

const NavSearch = () => {
  return (
    <Input
      type='text'
      className='max-w-xs dark:bg-muted'
      placeholder='search product...'
      required
    />
  );
};
export default NavSearch;
