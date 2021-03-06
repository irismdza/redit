import React from 'react';
import { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const Week = ({ week, selectLesson }) => (
  <div>
    <Subheader>
      <p>{week.title}</p>
    </Subheader>
    <Divider />
    {week.categories.map(category => (
      <ListItem
        key={category.id}
        primaryText={category}
        onTouchTap={() => selectLesson(category)}
      />
    ))
    }
  </div>
);

export default Week;
