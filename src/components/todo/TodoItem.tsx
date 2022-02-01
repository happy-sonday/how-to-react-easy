import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import '../../sass/TodoItem.scss';

const TodoItem = (props: any) => {
  const { text, checked } = props.todo;
  return (
    <div className='todo-item'>
      <div className={`checkbox ${checked ? 'checked' : ''}`}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove'>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoItem;
