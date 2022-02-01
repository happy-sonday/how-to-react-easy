import React from 'react';
import '../sass/TodoTemp.scss';

type IProps = {
  children: React.ReactNode;
};

const TodoTemp = ({ children }: IProps) => {
  return (
    <div className='todo-template'>
      <div className='app-title'>일정관리</div>
      <div className='content'>{children}</div>
    </div>
  );
};

export default TodoTemp;
