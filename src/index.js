import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxPromise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts-index';
import PostsNew from './components/posts-new';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/new" component={ PostsNew } />
        <Route path="/" component={ PostsIndex } />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
