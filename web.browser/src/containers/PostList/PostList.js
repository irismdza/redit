import React from 'react';
import Post from '../../components/Post';

const PostList = ({ posts, updateVote, selectedLesson }) => {
  return (
    <div>
      {posts.filter(post => post.categories.includes(selectedLesson)).map(post => (
        <Post
          key={post.id}
          post={post}
          updateVote={updateVote}
        />
      ))}
    </div>
  );
};

export default PostList;
