import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import '../../sass/TodoItem.scss';

const TodoItem = (props: any) => {
  const { id, text, checked } = props.todo;

  return (
    <div className='todo-item'>
      <div
        className={`checkbox ${checked ? 'checked' : ''}`}
        onClick={() => props.onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => props.onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoItem;
