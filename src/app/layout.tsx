import './globals.css';
import NavBar from './_components/NavBar';
import { Inter } from '@next/font/google'
const font = Inter({subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className} style={{overflowX: 'hidden'}}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-fixed bg-gradient-to-t from-gray-800 to-black">
        <NavBar />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
};
