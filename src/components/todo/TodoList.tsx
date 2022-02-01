import React from 'react';
import '../../sass/TodoList.scss';
import TodoItem from './TodoItem';

const TodoList = (props: any) => {
  return (
    <div className='todo-list'>
      {props.todos.map((todo: any) => (
        <TodoItem
          todo={todo}
          onRemove={props.onRemove}
          onToggle={props.onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
