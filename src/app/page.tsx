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
      <h1>Home</h1>
    </div>
  );
}
