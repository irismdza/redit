import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';


const PostToolbar = ({ sortNewest, sortMostPopular }) => (
  <Toolbar>
    <ToolbarTitle text="Posts" />
    <FlatButton onTouchTap={() => this.sortNewest()}>
      Newest
    </FlatButton>
    <FlatButton onTouchTap={() => this.sortMostPopular()}>
      Most Popular
    </FlatButton>
  </Toolbar>
);

PostToolbar.propTypes = {
  sortNewest: PropTypes.func,
  sortMostPopular: PropTypes.func
};

export default PostToolbar;
