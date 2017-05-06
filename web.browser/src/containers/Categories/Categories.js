import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';
import { List } from 'material-ui/List';
import Week from './../../components/Week';
import { data } from '../../mock-data';
import styles from './styles.css';


class Categories extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
      weeks: data.weeks,
    };
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <AppBar
            title="RED it"
            iconElementLeft={<SiteIcon />}
          />
          <List>
            {this.state.weeks.map(week => (
              <Week
                key={week.id}
                week={week}
              />
            ))};
          </List>
        </Drawer>
      </div>
    );
  }
}

export default Categories;
