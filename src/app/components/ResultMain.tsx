'use client';
import Image from 'next/image';
import Link from 'next/link';
import resultData from '../../../public/data/result.json'; // result.json 파일을 import
import women from '../../../public/images/women.jpg';
import { BiLinkAlt } from 'react-icons/bi';

type Props = {
  type: string;
};

export default function ResultMain({ type }: Props) {
  // type에 해당하는 결과를 찾음
  const result = resultData.data.find((item) => item.type === type);

  // 결과가 존재하지 않는 경우에 대한 처리
  if (!result) {
    return <section>No result found for type: {type}</section>;
  }

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        {/* 결과 값을 출력 */}
        <h2 className="text-2xl mb-2">{result.name}</h2>
        <div className="flex gap-2 items-center">
          {/* <strong>Tags:</strong> */}
          {result.tags.map((tag) => (
            <span
              className="bg-white border-2 border-blue-400 px-2 py-1 rounded-2xl mb-5 text-xs"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <Image
          className="mb-10"
          src={women}
          alt="결과 일러스트"
          height={200}
          width={200}
        />
      </div>
      <div className="flex flex-col mb-5">
        <strong className="font-semibold mb-1 bg-blue-200 w-fit px-3 py-1 rounded-full text-sm">
          나는 어떤 사람일까?
        </strong>
        {/* <ul className="my-3">
          {result.desc.map((line, index) => (
            <li className="text-xs leading-5" key={index}>
              {line}
            </li>
          ))}
        </ul> */}
        <p className="text-xs leading-5 p-2">{result.desc}</p>
      </div>
      <div className="mb-10 flex flex-col">
        <strong className="font-semibold mb-1 bg-blue-200 w-fit px-3 py-1 rounded-full text-sm">
          이것만은 피해주세요!
        </strong>
        <p className="text-xs leading-5 p-2">{result.desc2}</p>
      </div>
    </section>
  );
}
