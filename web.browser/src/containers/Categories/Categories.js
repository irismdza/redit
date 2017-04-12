import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import styles from './styles.css';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
        </Drawer>
      </div>
    );
  }
}

export default Categories;
