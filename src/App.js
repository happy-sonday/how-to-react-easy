import './App.css';

import React, { useState } from 'react';
import Home from './pages/Home';
import SayUseState from './components/SayUseState';
import HandleObjState from './components/HandleObjState';
import EventPractice from './components/EventPractice';
import ListIterable from './components/ListIterable';
import UseEffectPractice from './components/UseEffectPractice';
import UseReducerPractice from './components/UseReducerPractice';
import UserReducerInput from './components/UserReducerInput';
import UseMemoAVG from './components/UseMemoAVG';

const App = () => {
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
    </div>
  );
};

export default App;
