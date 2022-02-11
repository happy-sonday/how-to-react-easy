import React from 'react';
import { useParams } from 'react-router-dom';
import Articles from './Articles';

const ArticleDetail = () => {
  // NOTE: Profile 예제와 동일
  const { id } = useParams();
  return (
    <div>
      게시글 번호: {id}
      <Articles />
    </div>
  );
};

export default ArticleDetail;
