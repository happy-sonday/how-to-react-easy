import React, { useReducer } from 'react';

const reducer = (state: any, action: { name: string; value: string }) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};
const UserReducerInput = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  const { name, nickname } = state;

  const onChange = (e: { target: { name: string; value: string } }) => {
    // useState라면 콜백함수로 호춣하는 함수내에서 실행했을텐데 dispatch로 action값을 전달한다.

    dispatch(e.target);
  };

  return (
    <div>
      <h1>useReducer - input 관리</h1>
      <input type='text' value={name} onChange={onChange} name='name' />
      <br />
      <input type='text' value={nickname} onChange={onChange} name='nickname' />
      <br />
      useReducer로 입력된 값<br />
      name:{name}
      <br />
      nickname:{nickname}
      <br />
    </div>
  );
};

export default UserReducerInput;
