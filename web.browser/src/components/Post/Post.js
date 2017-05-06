import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

import styles from './styles.css';

const Post = ({ post, updateVote }) => (
  <Card className={styles.post}>
    <p>{post.title}</p>
    <p>{post.description}</p>
    <FlatButton
      className={styles.upvote}
      onTouchTap={() => updateVote()}
      label={`Vote ${post.votes}`}
    />
    <Chip label="Sort" />
  </Card>
);

Post.propTypes = {
  updateVote: PropTypes.func
};

export default Post;
