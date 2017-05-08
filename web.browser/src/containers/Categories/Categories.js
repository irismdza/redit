import React, { Component } from 'react';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';
import { List } from 'material-ui/List';
import Week from './../../components/Week';
import { fetchWeeks, selectLesson } from '../../redux/actions';
import styles from './styles.css';


class Categories extends Component {

  componentDidMount() {
    console.log('chicken');
    this.props.dispatch(fetchWeeks());
  }

  selectLesson(lesson) {
    this.props.dispatch(selectLesson(lesson));
    console.log('select lesson');
  }

  render() {
    return (
      <div>
        <Drawer open={'open'}>
          <AppBar
            title="RED it"
            iconElementLeft={<SiteIcon />}
          />
          <List>
            {this.props.weeks.map(week => (
              <Week
                key={week.id}
                week={week}
                selectLesson={lessonId => this.selectLesson(lessonId)}
              />
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weeks: state.weeks
  };
}

export default connect(mapStateToProps)(Categories);

