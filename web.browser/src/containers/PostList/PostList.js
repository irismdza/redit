import React from 'react';
import Post from '../../components/Post';

const PostList = ({ posts, updateVote }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          updateVote={updateVote}
        />
      ))};
    </div>
  );
};

export default PostList;
