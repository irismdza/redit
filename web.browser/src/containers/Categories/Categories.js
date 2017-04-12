import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';
import styles from './styles.css';
import { data } from '../../mock-data';


class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <AppBar
            title="RED it"
            iconElementLeft={
              <SiteIcon />
            }
          />
        </Drawer>
      </div>
    );
  }
}

export default Categories;
