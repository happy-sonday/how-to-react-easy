import React from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isLoggedIn = true;

  // replace 는 useNavigate처럼 페이지이동할때 현재 페이지 기록을 남기지 않기 위함
  return isLoggedIn ? (
    <Navigate to='/' replace={true} />
  ) : (
    <div>로그인페이지</div>
  );
};

export default Login;
