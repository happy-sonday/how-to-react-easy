import './App.css';

import React, { useCallback, useRef, useState } from 'react';
import Home from './pages/Home';
import SayUseState from './components/SayUseState';
import HandleObjState from './components/HandleObjState';
import EventPractice from './components/EventPractice';
import ListIterable from './components/ListIterable';
import UseEffectPractice from './components/UseEffectPractice';
import UseReducerPractice from './components/UseReducerPractice';
import UserReducerInput from './components/UserReducerInput';
import UseMemoAVG from './components/UseMemoAVG';
import TodoTemp from './pages/TodoTemp';
import TodoInsert from './components/todo/TodoInsert';
import TodoList from './components/todo/TodoList';

const App = () => {
  //todo 기본 데이터
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일',
      checked: true,
    },
    {
      id: 3,
      text: '최적화',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  /** 할일 추가 */
  const onInsert = useCallback(
    (text: string) => {
      const cloneTodo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos.concat(cloneTodo));
      nextId.current += 1;
    },
    [todos]
  );

  /** 할일 삭제 */
  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  /** 할일 상태 변경 */
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo: any) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Home fromParent={'컴포넌트속성전달'}>
        <article>
          <h1>컴포넌트 내부 작성</h1>
          <p>children으로 동적으로 node를 전달해 생성한다</p>
        </article>
      </Home>
      <SayUseState />
      <HandleObjState />
      <EventPractice />
      <ListIterable />

      <button onClick={() => setVisible(!visible)}>
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <UseEffectPractice />}

      <UseReducerPractice />
      <UserReducerInput />
      <UseMemoAVG />
      <TodoTemp>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemp>
    </div>
  );
};

export default App;
