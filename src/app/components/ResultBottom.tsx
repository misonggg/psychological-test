import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import resultData from '../../../public/data/result.json';
import Share from './Share';

type Props = {
  type: string;
};

const link_class =
  'flex flex-col items-center bg-white rounded-lg drop-shadow-xl hover:scale-105 transition-all duration-150';
const p_title = 'text-sm p-2';
const p_name = 'text-sm p-1';
const image_class = 'p-1';
const p_detail =
  'bg-blue-400 text-white text-center w-full p-2 rounded-b-lg text-sm';

export default function ResultBottom({ type }: Props) {
  // type에 해당하는 결과를 찾음
  const result = resultData.data.find((item) => item.type === type);

  const worstType = result ? result.worst[0] : '';
  const bestType = result ? result.best[0] : '';
  const worstTypeImage = result ? result.worst[1] : '';
  const bestTypeImage = result ? result.best[1] : '';
  const worstTypeLink = result ? result.worst[2] : '';
  const bestTypeLink = result ? result.best[2] : '';

  // 결과가 존재하지 않는 경우에 대한 처리
  if (!result) {
    return <section>No result found for type: {type}</section>;
  }

  return (
    <div className="flex items-center w-full gap-4 justify-center">
      <Link href={bestTypeLink} className={`${link_class} mr-2`}>
        <p className={`${p_title}`}>나와 잘 맞아요</p>
        <p className={`${p_name}`}>{bestType}</p>
        <Image
          className={`${image_class}`}
          src={bestTypeImage}
          alt="유저 이미지"
          width={130}
          height={80}
        />
        <p className={`${p_detail}`}>자세히 보기</p>
      </Link>
      <Link href={worstTypeLink} className={`${link_class}`}>
        <p className={`${p_title}`}>나와 안 맞아요</p>
        <p className={`${p_name}`}>{worstType}</p>
        <Image
          className={`${image_class}`}
          src={worstTypeImage}
          alt="유저 이미지"
          width={130}
          height={80}
        />
        <p className={`${p_detail}`}>자세히 보기</p>
      </Link>
    </div>
  );
}
