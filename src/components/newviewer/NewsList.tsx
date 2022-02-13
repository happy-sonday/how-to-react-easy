import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import ScaleLoader from 'react-spinners/ScaleLoader';
import usePromise from '../../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const LoadingBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ErrorBlock = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const NewsList = ({ currentCategory }: any) => {
  const [loading, resolved, error] = usePromise(() => {
    const query =
      currentCategory === 'all' ? '' : `&category=${currentCategory}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_NEWS_API}`
    );
  }, [currentCategory]);

  // 로딩중일 때
  if (loading) {
    return (
      <LoadingBlock>
        <ScaleLoader height='160' width='32' color='#6b5ce7' radius='8' />
      </LoadingBlock>
    );
  }

  // 에러발생시
  if (error)
    return (
      <ErrorBlock>
        알수없는 에러 발생
        <br /> 관리자에게 문의하세요:(
      </ErrorBlock>
    );

  // NOTE: 초기 구동시 데이터 동기화 타이밍이 안맞아 null error 발생하므로 필요
  if (!resolved) return null;

  // 데이터 렌더링
  const { articles } = resolved.data;
  return (
    <NewsListBlock>
      {articles ? (
        articles.map((article: any) => (
          <NewsItem key={article.url} article={article} />
        ))
      ) : (
        <h3>결과 없음</h3>
      )}
    </NewsListBlock>
  );
};

export default NewsList;
