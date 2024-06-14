'use client';

import { ThemeProvider } from '@/components/global/theme-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
};
export default Providers;
