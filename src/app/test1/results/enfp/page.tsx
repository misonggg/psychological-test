import ResultBottom from '@/app/components/ResultBottom';
import ResultMain from '@/app/components/ResultMain';
import Share from '@/app/components/Share';
import React from 'react';

export default function App() {
  return (
    <div>
      {/* 다른 페이지에서 사용할 때, type을 지정해줄 수 있습니다. */}
      <ResultMain type="enfp" />
      <ResultBottom type="enfp" />
      <Share />
    </div>
  );
}
