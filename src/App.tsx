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
import HighLight from './components/HighLight';
import ImmerPractice from './components/ImmerPractice';
import { Route, Routes } from 'react-router-dom';
import About from './components/spa-router/About';
import SPAHome from './components/spa-router/SPAHome';
import Articles from './components/spa-router/Articles';
import ArticleDetail from './components/spa-router/ArticleDetail';
import Layout from './components/spa-router/Layout';
import NotFound from './components/spa-router/NotFound';

const createBulkItems = () => {
  const array = [];
  for (let index = 0; index < 2500; index++) {
    array.push({
      id: index,
      text: `할일 ${index}`,
      checked: false,
    });
  }

  return array;
};

const App = () => {
  //todo 기본 데이터
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트 기초',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '최적화',
  //     checked: false,
  //   },
  // ]);

  const [todos, setTodos] = useState(createBulkItems);

  const nextId = useRef(2501);

  /**
   * NOTE: 최적화 방법1
   * useCallback 두번째 파라미터에 배열에 최신상태(업데이트)의 todos배열을 참조하기때문에
   * 매번 새로운 함수가 생성되는 것을 함수형 업데이트 방법으로 방지한다.
   *
   * 현재상태의 state를 setter의 콜백 파라미터로 전달한다.
   * 배열의 두번째 최신상태의 변수를 검사하지 않도록 빈배열로 둔다.
   * 이것을 함수형 업데이트라고 한다.
   * useReducer도 있지만 방법의 차이
   *
   */

  /** @type {*} */
  const onInsert = useCallback((text: string) => {
    const cloneTodo = {
      id: nextId.current,
      text,
      checked: false,
    };

    setTodos((todos) => todos.concat(cloneTodo));
    nextId.current += 1;
  }, []);

  /** 할일 삭제 */
  const onRemove = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  /** 할일 상태 변경 */
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/*       <Home fromParent={'컴포넌트속성전달'}>
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
      <UseMemoAVG /> */}
      {/*    <TodoTemp>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemp> */}

      {/* <HighLight /> */}
      {/* <ImmerPractice /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<SPAHome />} />
          <Route path='/about' element={<About />} />
        </Route>
        <Route path='/articles' element={<Articles />}>
          <Route path=':id' element={<ArticleDetail />} />
        </Route>
        {/* NOTE: 없는페이지 라우트 설정 */}
        <Route path='*' element={<NotFound />} />

        {/*  <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:id' element={<ArticleDetail />} /> */}
      </Routes>
    </div>
  );
};

export default App;
