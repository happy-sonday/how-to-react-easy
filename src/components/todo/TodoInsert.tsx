import React from 'react';
import { MdAdd } from 'react-icons/md';
import '../../sass/TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form action='' className='todo-insert'>
      <input type='text' placeholder='할 일을 입력하세' />
      <button type='submit'>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
