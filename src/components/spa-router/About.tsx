import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const detail = searchParams.get('detail');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true } as any);
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail } as any);
  };
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <ul>
        <li>
          <Link to='/profile/happy'>sonday님의 프로필</Link>
        </li>
        <li>
          <Link to='/profile/gildong'>홍길동님의 프로필</Link>
        </li>
        {/* NOTE: 현재 페이지정보를 location 객체로 반환 //쿼리스트링을
        파싱하는것은 qs또는 queryString 패키지도 있지만 useSearchParams()
        Hooks도 있다. 
        
           "pathname": "/about", // 주고 경로
            "search": "?detail=true&mode=1", // 파라미터
            "hash": "", // 구형 브라우저의 클라이언트 라우팅 사용할때 사용
            "state": null, // 페이지 이동시 넣은 임의 상태 값
            "key": "default" //  location 객체의 교유값 default이며 페이지가 변경될때마다 고유값 생성
}
        
        */}
        <p>쿼리스트링:{location.search}</p>
        <h3>useSearchParams Hook으로 쿼리스트링 파싱</h3>
        <p>detail:{detail}</p>
        <p>mode:{mode}</p>
        <button onClick={onToggleDetail}>toggle detail</button>
        <button onClick={onIncreaseMode}>mode + 1</button>
      </ul>
    </div>
  );
};

export default About;
