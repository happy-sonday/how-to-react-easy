import React from 'react';
import { Navigate } from 'react-router-dom';

const MyPage = () => {
  const isLoggedIn = true;

  // replace 는 useNavigate처럼 페이지이동할때 현재 페이지 기록을 남기지 않기 위함
  return !isLoggedIn ? (
    <Navigate to='/login' replace={true} />
  ) : (
    <div>마이페이지</div>
  );
};

export default MyPage;
