import React from 'react';
import '../../sass/TodoList.scss';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div className='todo-list'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
