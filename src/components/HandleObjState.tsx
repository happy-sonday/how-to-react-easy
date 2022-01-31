import React, { useState } from 'react';

const HandleObjState = () => {
  //NOTE: 전개여산자를 활용하여 새로운 객체로 반환(불변성 위반인 겨웅 에러발생 주의)
  // object인경우 변경되는 properties를 덮어쓴다.
  // 배열의 경우 map, filter, concat등 새로운 배열을 반환하는 내장메소드를 사용한다.
  const [obj, setObj] = useState({ a: 1, b: 2, c: 3 });
  const [array, setArray] = useState([1, 2, 3, 4]);

  return (
    <>
      <article>
        <h1>useState 객체 다루기</h1>
        <div>
          {`객체 a의 값은 ${obj.a}`}{' '}
          <button onClick={() => setObj({ ...obj, a: 10 })}>10으로 변경</button>
        </div>
        <div>
          {`첫번째 인덱스 배열값은 ${array[0]}`}
          <button
            onClick={() =>
              setArray(
                array.map((elem, index) => {
                  return index === 0 ? (array[index] = 100) : array[index];
                })
              )
            }
          >
            100으로 변경
          </button>
        </div>
      </article>
    </>
  );
};

export default HandleObjState;
