import Sidebar from '@/components/admin/Sidebar';
import Heading from '@/components/global/Heading';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Heading text='Dashboard' />
      <div className='grid lg:grid-cols-12 gap-12 mt-12'>
        <div className='lg:col-span-2'>
          <Sidebar />
        </div>
        <main className='lg:col-span-10'>{children}</main>
      </div>
    </>
  );
};
export default DashboardLayout;
