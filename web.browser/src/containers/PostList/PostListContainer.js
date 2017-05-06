import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostToolbar from '../../components/PostToolbar';
import PostList from './PostList';
import { updateVote, sortNewest, sortMostPopular } from './../../redux/actions';

import styles from './styles.css';

class PostListContainer extends Component {

  constructor() {
    super();
    this.updateVote = this.updateVote.bind(this);
    this.sortNewest = this.sortNewest.bind(this);
    this.sortMostPopular = this.sortMostPopular.bind(this);
  }

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
          sortNewest={this.sortNewest()}
          sortMostPopular={this.sortMostPopular()}
        />
        <PostList
          posts={this.props.posts}
          updateVote={this.updateVote()}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(PostListContainer);
