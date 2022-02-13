import axios from 'axios';
import React from 'react';
import usePromise from '../../lib/usePromise';

const wait = () => {
  //   // 3초 후에 끝나는 프로미스를 반환
  //   return new Promise((resolve) =>
  //     setTimeout(() => resolve('Hello hooks!'), 3000)
  //   );

  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API}`
  );
};

const UsePromiseSample = () => {
  const [loading, resolved, error] = usePromise(wait, []);

  if (loading) return <div>로딩중..!</div>;
  if (error) return <div>에러 발생!</div>;
  if (!resolved) return null;

  console.log(resolved);

  return <h1>{resolved ? '로드  성공' : '데이터 실패'}</h1>;
};

export default UsePromiseSample;
