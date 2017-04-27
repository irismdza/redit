import React from 'react';
import Post from '../../components/Post';
import { updateVote } from '../../redux/actions';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          updateVote={updateVote()}
        />
      ))};
    </div>
  );
};

export default PostList;
