import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostToolbar from '../../components/PostToolbar';
import PostList from './PostList';
import { updateVote, sortNewest, sortMostPopular } from './../../redux/actions';

import styles from './styles.css';

class PostListContainer extends Component {
  updateVote(postId) {
    this.props.dispatch(updateVote(postId));
  }

  sortNewest() {
    this.props.dispatch(sortNewest());
  }

  sortMostPopular() {
    this.props.dispatch(sortMostPopular());
  }

  render() {
    return (
      <div className={styles.postListContainer}>
        <PostToolbar
          sortNewest={() => this.sortNewest()}
          sortMostPopular={() => this.sortMostPopular()}
        />
        <PostList
          posts={this.props.posts}
          selectedLesson={this.props.selectedLesson}
          updateVote={postid => this.updateVote(postid)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    selectedLesson: state.selectedLesson,
  };
}

export default connect(mapStateToProps)(PostListContainer);
