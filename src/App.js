import './App.css';

import React from 'react';
import Home from './pages/Home';
import SayUseState from './components/SayUseState';
import HandleObjState from './components/HandleObjState';

const App = () => {
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
    </div>
  );
};

export default App;
