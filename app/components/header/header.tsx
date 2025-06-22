import { ThemeToggle } from '../ui/theme-toggle';

const Header = () => {
  return (
    <div className='px-5 flex justify-between items-center min-h-[40px] bg-blue-200 dark:bg-blue-400 fixed top-0 left-0 w-full'>
      <ThemeToggle className='ml-auto' />
    </div>
  );
};

export default Header;
