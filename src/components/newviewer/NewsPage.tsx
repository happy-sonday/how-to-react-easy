import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <div>
      <Categories />
      <NewsList currentCategory={category} />
    </div>
  );
};

export default NewsPage;
