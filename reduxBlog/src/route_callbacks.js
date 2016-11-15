import {fetchPosts} from './actions/index';
import {store} from './index';

export function onPostsEnter(){
    store.dispatch(fetchPosts());
}