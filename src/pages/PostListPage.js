import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostlistContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
