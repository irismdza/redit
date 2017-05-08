import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';


const PostToolbar = ({ sortNewest, sortMostPopular }) => (
  <Toolbar>
    <ToolbarTitle text="Posts" />
    <FlatButton onTouchTap={() => sortNewest()}>
      Newest
    </FlatButton>
    <FlatButton onTouchTap={() => sortMostPopular()}>
      Most Popular
    </FlatButton>
  </Toolbar>
);

PostToolbar.propTypes = {
  sortNewest: PropTypes.func,
  sortMostPopular: PropTypes.func
};

export default PostToolbar;
