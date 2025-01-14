import { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  verification: {
    google: '6o5Lcww7U6jkboi0ZpvyonRKDh_L8pEpUUtJFi0exOE',
    other: {
      'naver-site-verification': '9dbc76f924814a3fc2e83542a1705ef71cc123d8',
    },
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
