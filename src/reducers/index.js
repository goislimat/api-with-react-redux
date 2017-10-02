import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import fetchPosts from './fetch-posts';

const rootReducer = combineReducers({
  posts: fetchPosts,
  form: formReducer,
});

export default rootReducer;
