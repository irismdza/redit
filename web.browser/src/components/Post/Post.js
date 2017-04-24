import React from 'react';

import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const Post = ({ post, updateVote }) => (
  <Card>
    {post.link} 
    <FlatButton 
    onTouchTap={() => updateVote(post)}
    >
      {post.votes ? post.votes : '0' }
    </FlatButton>
    <p>{post.title}</p>
    <p>{post.description}</p>
    <Chip label="Sort" />
  </Card>
);

export default Post;
