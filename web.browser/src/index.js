import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import HeaderBar from './components/HeaderBar';
import Categories from './containers/Categories';
import Week from './components/Week';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';
import './styles/index.css';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <MainLayout>
      <App>
        <HeaderBar />
        <Categories>
          <Week />
        </Categories>
      </App>
    </MainLayout>
  </MuiThemeProvider>,
  document.getElementById('root')
);
