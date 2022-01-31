import React, { useState } from 'react';

//NOTE: component 내부에서 바뀔 수 있는 값을 의미, props는 읽기전용
const SayUseState = () => {
  const [color, setColor] = useState('');

  return (
    <>
      <h1 style={{ color }}>useState 색변경</h1>
      <button onClick={() => setColor('red')}>레드로 변경</button>
      <button onClick={() => setColor('green')}>녹색으로 변경</button>
      <button onClick={() => setColor('')}>초기화</button>
    </>
  );
};

export default SayUseState;
