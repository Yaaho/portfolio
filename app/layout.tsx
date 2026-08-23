import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '임건우 포트폴리오',
  description: 'Unreal Engine rendering and tools programming portfolio.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
