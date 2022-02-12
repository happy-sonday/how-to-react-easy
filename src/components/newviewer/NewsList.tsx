import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import ScaleLoader from 'react-spinners/ScaleLoader';

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
const NewsList = ({ currentCategory }: any) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query =
          currentCategory === 'all' ? '' : `&category=${currentCategory}`;
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_NEWS_API}`
        );

        setArticles(res.data.articles);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [currentCategory]);

  // const sampleArticle = {
  //   title: '제목',
  //   description: '내용',
  //   url: 'https://google.com',
  //   urlToImage: 'https://via.placeholder.com/160',
  // };

  // 로딩중일 때
  if (loading) {
    return (
      <LoadingBlock>
        <ScaleLoader height='160' width='32' color='#6b5ce7' radius='8' />
      </LoadingBlock>
    );
  }

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
