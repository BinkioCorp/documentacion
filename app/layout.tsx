import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>"/>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
