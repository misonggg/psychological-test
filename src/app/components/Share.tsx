'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiLinkAlt } from 'react-icons/bi';

export default function Share() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="flex flex-col items-center mt-12 text-sm hover:opacity-60"
        onClick={copyToClipboard}
      >
        링크로 공유하기
        <BiLinkAlt className="text-3xl ml-1 text-white bg-gray-400 p-1 items-center rounded-full mt-3" />
      </button>
      <Link
        href={'/test1'}
        className="mt-10 p-2 bg-blue-200 w-80 rounded-full text-sm text-center mb-20"
      >
        첫화면으로 가기
      </Link>
      {isCopied && (
        <p className="bg-gray-200 drop-shadow-xl py-2 px-3 rounded-full fixed top-1/2 left-1/2">
          복사되었습니다.
        </p>
      )}
    </div>
  );
}
