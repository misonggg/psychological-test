import Image from 'next/image';
import Link from 'next/link';
import test from '../../public/images/test.png';

export const metadata = {
  title: '타이틀',
  description: '디스크립션',
};

export default function Home() {
  return (
    <div>
      <h1>아래 텍스트 클릭해서 이동하세요</h1>
      <Link href="/test1">임시임 : 테스트 페이지로 이동</Link>
    </div>
  );
}
