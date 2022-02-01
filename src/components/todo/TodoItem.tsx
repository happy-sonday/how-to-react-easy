import React from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import '../../sass/TodoItem.scss';
const TodoItem = () => {
  return (
    <div className='todo-item'>
      <div className='checkbox'>
        <MdCheckBoxOutlineBlank />
        <div className='text'>할일</div>
      </div>
      <div className='remove'>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoItem;
