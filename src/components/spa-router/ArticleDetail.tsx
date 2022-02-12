import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

const ArticleDetail = () => {
  // NOTE: Profile 예제와 동일
  const { id } = useParams();

  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return <h1>게시글 {id}</h1>;
};

export default ArticleDetail;
