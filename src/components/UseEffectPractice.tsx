import React, { useEffect, useState } from 'react';

const UseEffectPractice = () => {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('마운트 될때만 실행됩니다.');
    // 컴포넌트 unmounted에 후속작업할 것을 반환할때에 넣는다.
    return () => {
      console.log('unmounted and cleanup');
    };
  }, []);

  useEffect(() => {
    //최초 마운트될때 실행 및 배열에 변수값이 변경될때마다 body내에 작성한 코드 실행

    setCount(count + 1);
    console.log('useEffect 리렌더링');

    // update되기 직전과 unmounted 직전에 실행됨
    return () => {
      console.log('updated', { count });
    };
    // 특정 변수값을 읽어들여 감지하고 useEffect body에 작성된 내용을 실행하고자할때는 해당 변수값을 넣는다.
  }, [input]);

  return (
    <>
      <h1>useEffect 연습</h1>
      <input
        type='text'
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </>
  );
};

export default UseEffectPractice;
