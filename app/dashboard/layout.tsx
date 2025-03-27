import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Esports Player Dashboard',
  description: 'Professional esports player statistics and management dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}