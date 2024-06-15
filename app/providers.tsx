'use client';

import { ThemeProvider } from '@/components/global/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
      </ThemeProvider>
      <Toaster />
    </>
  );
};
export default Providers;
