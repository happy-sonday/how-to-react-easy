import React, { useReducer } from 'react';

/**
 *
 * NOTE: useState보다 다양한 상태값으로 업데이트 해주고 싶을때 사용
 * 현재상태, 업데이트를 위해 필요한 정보를 담은
 * action(type과 그외 추가가 필요한 값으로 구성)값을 전달받아 새로운 상태로 반환하는 함수
 *
 */

const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const UseReducerPractice = () => {
  // dispatch 함수로 전달된 action객체의 type이 reducer 함수가 호출되어 인자로 전달
  // dispatch에 의해 전달된 액션객체 내 type properties switch-case로 읽음
  // 현재 상태값을 갖고 있는 state를 가공하여 반환 number 업데이트
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default UseReducerPractice;
