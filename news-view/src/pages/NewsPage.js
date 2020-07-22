import React, { Fragment } from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';

  return (
    <Fragment>
      <Categories />
      <NewsList category={category}></NewsList>
    </Fragment>
  );
};
