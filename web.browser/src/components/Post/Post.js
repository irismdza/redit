import React from 'react';
import { connect } from 'react-redux';

import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

import { post, updateVote } from './../../redux/actions';

const Post = ({ post, updateVote }) => (
  <Card>
    {post.link}
    <FlatButton
      onTouchTap={() => updateVote(post)}
    >
    {/*{this.props.dispatch(updateVote(vote));}*/}
      {post.votes ? post.votes : '0' }
    </FlatButton>
    <p>{post.title}</p>
    <p>{post.description}</p>
    <Chip label="Sort" />
  </Card>
);

// const mapStateToProps = (state) => {
//     postList: state.post
// };

// export default connect(mapStateToProps)(Post);

export default Post;
