import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  // NOTE: Link 컴포넌트를 사용하지않고 페이지 이동 핸들링 Hooks
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    // replace true인경우 현재페이지에 대한 history를 저장하지 않는다.
    // 로그인 완료후 뒤로가기시 접근못하도록 하면 될것 같다.
    navigate('/articles', { replace: true });
  };
  return (
    <div>
      <header>Header</header>
      <nav>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
