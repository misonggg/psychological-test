import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="h-10 bg-gray-100 px-2 flex flex-row justify-between items-center">
      {/* <div className="hover:opacity-70 transition-all duration-150 flex items-center"> */}
      <h1 className="font-bold">MindScope</h1>
      <p className="mr-1 text-xs px-2 py-1 border-2 border-gray-200 rounded-full cursor-pointer hover:bg-gray-200">
        다른 테스트도 보러 가기
      </p>
      {/* </div> */}
    </div>
  );
}
