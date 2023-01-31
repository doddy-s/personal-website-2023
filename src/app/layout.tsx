import './globals.css';
import NavBar from './_components/NavBar';
import { JetBrains_Mono } from '@next/font/google'
const JBM = JetBrains_Mono({subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={JBM.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-fixed bg-gradient-to-t from-gray-800 to-black">
        <NavBar />
        <div className="px-8">
          {children}
        </div>
      </body>
    </html>
  );
};
