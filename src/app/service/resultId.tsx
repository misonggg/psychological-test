// pages/result/[resultId].tsx

import React from 'react';
import { useRouter } from 'next/router';

const ResultPage: React.FC = () => {
  const router = useRouter();
  const { resultId } = router.query;

  return (
    <div>
      <h3>테스트 결과</h3>
      <p>총점:</p>
      <p>결과: {resultId}</p>
    </div>
  );
};

export default ResultPage;
