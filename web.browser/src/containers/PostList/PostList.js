import React from 'react';
import Post from '../../components/Post';

const PostList = ({ posts, updateVote }) => {
  return (
    <div>
      {posts.map((post, i) => (
        <Post
          key={i}
          post={post}
          updateVote={updateVote}
        />
      ))};
    </div>
  );
};

export default PostList;
