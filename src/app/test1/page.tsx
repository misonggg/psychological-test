'use client';
import Image from 'next/image';
import Link from 'next/link';
import test from '../../../public/images/test.png';
import { BiLinkAlt } from 'react-icons/bi';
import { useState } from 'react';

// export const metadata = {
//   title: '타이틀',
//   description: '디스크립션',
// };

export default function Test1() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <div className="flex flex-col items-center w-full mt-20">
      <h1 className="text-2xl font-bold mb-3 font-gmarket">
        나의 선물 유형을 찾아서 Test1
      </h1>
      <p className="mb-10 font-gmarket">
        나의 선물 유형이 무엇인지 알아볼까요?
      </p>
      <Image
        className="mb-20"
        src={test}
        alt="컴퓨터 일러스트"
        width={200}
        height={200}
      />
      <Link href="/test1/quiz">
        <button className="bg-yellow-300 py-3 px-4 rounded-full w-80 font-bold hover:bg-yellow-400">
          테스트 시작하기
        </button>
      </Link>
      <button
        className="flex flex-col items-center mt-12 text-sm hover:opacity-60"
        onClick={copyToClipboard}
      >
        링크로 공유하기
        <BiLinkAlt className="text-3xl ml-1 text-white bg-gray-400 p-1 items-center rounded-full mt-3" />
      </button>
      {isCopied && (
        <p className="bg-blue-200 drop-shadow-xl py-2 px-3 rounded-full fixed top-1/2 left-1/2">
          복사되었습니다.
        </p>
      )}
    </div>
  );
}
