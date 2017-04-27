import React, { Component } from 'react';
import { connect } from 'react-redux';
import { data } from '../../mock-data';
import PostToolbar from '../../components/PostToolbar';
import PostList from './PostList';
import { updateVote } from './../../redux/actions';

import styles from './styles.css';

class PostListContainer extends Component {
  constructor() {
    super();
        // this.updateVote = this.updateVote.bind(this);
    this.state = {
      posts: data.posts,
      orderby: 'newest'
    };
  }

    // updateVote(postClicked) {
    //     const newPostList = this.state.posts.map((post) => {
    //         if (postClicked.id === post.id) {
    //             post.votes++
    //         }
    //         return post;
    //     });
    //     this.setState({
    //         posts: newPostList,
    //     })
    // };

    updateVote(postClicked) {
       this.props.dispatch(updateVote.id)
    };

  sortNewest() {
    const sortedPosts = this.state.posts.sort((a, b) => a.id - b.id);
    this.setState({
      posts: sortedPosts
    });
    console.log('newest');
  }

  sortMostPopular() {
    const sortedPosts = this.state.posts.sort((a, b) => b.votes - a.votes);
    this.setState({
      posts: sortedPosts
    });
    console.log('most popular');
  }

  render() {
    return (
      <div className={styles.postListContainer}>
        <PostToolbar
          sortNewest={() => this.sortNewest()}
          sortMostPopular={() => this.sortMostPopular()}
        />
        <PostList
          posts={data.posts}
          updateVote={post => updateVote(post)}
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
