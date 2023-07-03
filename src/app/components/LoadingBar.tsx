import React from 'react';

type LoadingBarProps = {
  currentQuestion: number;
  totalQuestions: number;
};

const LoadingBar: React.FC<LoadingBarProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div
      style={{
        width: '100%',
        height: '10px',
        backgroundColor: '#ccc',
        borderRadius: '10px',
      }}
    >
      <div
        style={{
          width: `${progressPercentage}%`,
          height: '10px',
          backgroundColor: '#2E9AFE',
          transition: 'width 0.2s ease-in-out',
          borderRadius: '10px',
        }}
      />
    </div>
  );
};

export default LoadingBar;
