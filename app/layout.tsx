import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'AI Agent Interface',
  description: 'AI Agent Collaboration Platform',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
