import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Variation Mastery Academy',
  description: 'KSSM Form 5 Mathematics Chapter 1: Variation'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
