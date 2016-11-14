import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {reducer as formReducer} from 'redux-form';
import SelectedPostsReducer from './reducer_selected_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  selectedPostsIds: SelectedPostsReducer
});

export default rootReducer;
