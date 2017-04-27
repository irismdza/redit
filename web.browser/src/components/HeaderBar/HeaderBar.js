import React from 'react';
import AppBar from 'material-ui/AppBar';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';
import FlatButton from 'material-ui/FlatButton';

const HeaderBar = () => (
  <AppBar
    title="RED it"
    iconElementLeft={
        <SiteIcon />
    }
    iconElementRight={
        <div>
            <FlatButton label="Share a new link" />
            <FlatButton label="Logout" />
        </div>
    }
  />
);

export default HeaderBar;