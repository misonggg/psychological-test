'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

type Quiz = {
  title: string;
  options: {
    content: string;
    type: { [key: string]: number };
  }[];
};

type QuizData = {
  data: Quiz[];
};

const QuizComponent: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [scores, setScores] = useState<{ [key: string]: number }>({
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
    I: 0,
    E: 0,
  });

  const quizData: QuizData = require('../../../../public/data/quiz.json');
  const router = useRouter();

  const handleAnswer = (answer: string, type: { [key: string]: number }) => {
    setAnswers([...answers, answer]);

    for (const key in type) {
      if (type.hasOwnProperty(key)) {
        setScores((prevScores) => ({
          ...prevScores,
          [key]: prevScores[key] + type[key],
        }));
      }
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  // 계산식 수정하기
  const calculateResult = () => {
    const result: string[] = [];
    const I = scores['I'] > scores['E'] ? 'i' : 'e';
    const N = scores['N'] > scores['S'] ? 'n' : 's';
    const F = scores['F'] > scores['T'] ? 'f' : 't';
    const P = scores['P'] > scores['J'] ? 'p' : 'j';

    result.push(I, N, F, P);
    return result.join('');
  };

  const renderQuiz = () => {
    if (currentQuestion >= quizData.data.length) {
      const result = calculateResult();
      const resultPath = `/test1/results/${result}`;
      router.push(resultPath);
      return null;
    }

    const question = quizData.data[currentQuestion];

    // 로딩바 따로 컴포넌트로 빼기 -> 근데 useState 다른 것도 있어서 빼려면 둘 다 빼야 됨..
    const renderLoadingBar = () => {
      const totalQuestions = quizData.data.length;
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
              borderRadius: '10px', // 추가된 부분: 네모박스 넓이 변경 시 애니메이션 효과
            }}
          />
        </div>
      );
    };

    return (
      <div className="w-full text-center items-center justify-center">
        {renderLoadingBar()}
        <div
          className="flex flex-row mt-10 items-center text-gray-500 hover:opacity-60 cursor-pointer"
          onClick={previousQuestion}
        >
          <FaArrowLeft className="text-md mr-2" />
          <span className="text-xs">이전 질문으로 돌아가기</span>
        </div>
        <h3 className="h-[400px] text-center flex items-center justify-center cursor-pointer">
          {question.title}
        </h3>
        <ul className="px-2 md:px-4">
          {question.options.map((option, index) => (
            <li
              onClick={() => handleAnswer(option.content, option.type)}
              className="cursor-pointer bg-wihie border-2 border-gray-300 bg-gray-100 py-2 px-4 rounded-lg mb-4 text-sm hover:bg-blue-100 hover:border-blue-500 active:bg-blue-500 active:border-blue-500 active:text-white"
              key={index}
            >
              {option.content}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {renderQuiz()}
    </div>
  );
};

export default QuizComponent;
