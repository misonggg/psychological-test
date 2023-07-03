import Head from 'next/head';

interface Type {
  title: string;
  description: string;
  // url?: string;
  // image?: string;
}

const SEO = ({ title, description }: Type) => {
  return (
    <Head>
      <title> {title} | 심리테스트</title>
      <meta
        name="description"
        content={description || '여러가지 상황으로 알아보는 나의 진짜 모습'}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || '진정한 나를 발견하기'} />
      <meta property="og:type" content="website" />
      {/* <meta
        property="og:url"
        content={url || 'https://gift-mbti-sandy.vercel.app'}
      />
      <meta property="og:image" content={image} /> */}
      <meta property="og:article:author" content="선물 유형 찾기" />
    </Head>
  );
};

export default SEO;
