import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <ul>
      {/* NOTE: Route children으로 들어가는 JSX의 엘리먼트들을 보여주는 역할 */}
      <Outlet />
      <li>
        <Link to='/articles/1'>게시글1</Link>
      </li>
      <li>
        <Link to='/articles/2'>게시글2</Link>
      </li>
      <li>
        <Link to='/articles/3'>게시글3</Link>
      </li>
    </ul>
  );
};

export default Articles;
