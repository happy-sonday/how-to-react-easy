import React, { ChangeEvent, useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../../sass/TodoInsert.scss';

const TodoInsert = ({ onInsert }: any) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      // app.tsx에서 props로 전달돼서 구조분해할당으로 사용가능
      onInsert(value);
      setValue('');

      //submit시 기본 새로고침 방지
    },
    [onInsert, value]
  );

  return (
    <form action='' className='todo-insert' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}
      />
      <button type='submit'>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
