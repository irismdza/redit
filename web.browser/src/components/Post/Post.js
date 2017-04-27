import React from 'react';
import { connect, mapStateToProps } from 'react-redux';

import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import { updateVote } from './../../redux/actions';

const Post = ({ post }) => (
  <Card>
    {post.link}
    <FlatButton onTouchTap={() => updateVote(post.id)}>
    {/*{this.props.dispatch(updateVote(vote));}*/}
     Vote {post.votes ? post.votes : '0' }
    </FlatButton>
    <p>{post.title}</p>
    <p>{post.description}</p>
    <Chip label="Sort" />
  </Card>
);

// function mapStateToProps(state) {
//   return {
//     postList: state.newPostList
//   };
// }

export default connect()(Post);
