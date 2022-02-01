import React, { MutableRefObject, useRef, useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({ username: '', message: '' });

  //useState로 선언한 form 객체 구조분해할당
  const { username, message } = form;

  const handleInput = (e: any) => {
    setForm({
      ...form, // 기존의 form 객체 복사
      [e.target.name]: e.target.value, // 키에 해당하는 값을 받아 덮어쓴다.
    });
  };

  const onClick = () => {
    console.log(form);
    alert(`${username} : ${message}`);
  };

  /**
   *
   * NOTE:ref DOM을 직접적으로 건드리거나 컴포넌트 내부에 있는 DOM을 외부에서 조작(조회 및 수정 등)할때 사용한다.
   * useRef Hook 은 DOM 을 선택하는 용도 외 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리
   * useRef 로 관리하는 변수는 값이 바뀌어도 컴포넌트 리렌더링 X
   * 이 값을 수정 할때에는 .current 값을 수정, 조회 할 때에는 .current 를 조회
   * */

  // rest버튼을 누를시 input name으로 커서 focusing

  const nameInput = useRef() as MutableRefObject<HTMLInputElement>;
  const onReset = () => {
    setForm({
      username: '',
      message: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <h1>멀티 input state 다루기</h1>
      <input
        type='text'
        name='username'
        value={username}
        onChange={handleInput}
        ref={nameInput}
      />
      <br />
      <input
        type='text'
        name='message'
        value={message}
        onChange={handleInput}
      />
      <button onClick={onClick}>확인</button>
      <br />
      <button onClick={onReset}>초기화</button>
      <br />
    </div>
  );
};

export default EventPractice;
