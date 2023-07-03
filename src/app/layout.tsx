import './globals.css';
import { Open_Sans } from 'next/font/google';
import Navbar from './components/Navbar';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: '심리테스트',
  description: '나를 알아가는 시간!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="font-suite">
      <body className="max-w-xl w-full mx-auto justify-center md:w-[450px]">
        <header className="sticky top-0">
          <script
            defer
            src="https://developers.kakao.com/sdk/js/kakao.min.js"
          ></script>
          <Navbar />
        </header>
        <main className="bg-white h-full p-6 ">{children}</main>
      </body>
    </html>
  );
}
