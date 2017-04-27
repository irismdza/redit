import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import Welcome from './containers/Welcome';
import Login from './containers/Login';
import Post from './components/Post';
import PostList from './containers/PostList';
import CreatePost from './containers/CreatePost';
import store from './redux/store';

import muiTheme from './styles/mui-theme';
import './styles/index.css';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router>
        <MainLayout>
          <App>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="Login" component={Login} />
              <Route exact path="/createpost" component={CreatePost} />
              <Route exact path="/postlist" component={PostList} />
              <Route exact path="/post" component={Post} />
            </Switch>
          </App>
        </MainLayout>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
