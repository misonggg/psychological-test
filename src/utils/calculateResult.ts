// S , T , J가 마이너스 값을 가진다.
// N , F , P는 플러스 값을 가진다.
// 둘을 절대값을 사용해서 비교하면 된다.

const calculateResult = (type: any) => {
  let res = '';
  res += type.N > Math.abs(type.S) ? 'N' : 'S';
  res += type.F > Math.abs(type.T) ? 'F' : 'T';
  res += type.P > Math.abs(type.J) ? 'P' : 'J';

  switch (res) {
    case 'NTJ':
      res = '1';
      break;
    case 'NTP':
      res = '2';
      break;
    case 'NFJ':
      res = '3';
      break;
    case 'NFP':
      res = '4';
      break;
    case 'SFJ':
      res = '5';
      break;
    case 'SFP':
      res = '6';
      break;
    case 'STJ':
      res = '7';
      break;
    case 'STP':
      res = '8';
      break;
    default:
      throw new Error('잘못된 타입입니다');
  }
  return res;
};

export default calculateResult;
