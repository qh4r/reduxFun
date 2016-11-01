import axios from 'axios';

export const FETCH_POSTS = Symbol('FETCH_POSTS');
export const CREATE_POST = Symbol('CREATE_POST');
export const FIND_POST = Symbol('FIND_POST');
export const DELETE_POST = Symbol('DELETE_POST');

import rootUrl from './root_url'

// PRZYKłAD UZYCIA REDUX-THUNK
// pozwala dispatchowac - bardziej niskopoziomowy middleware niz redux promise
// musi byc uzyty w combine middlewares by dzialac
// wykrywa gdy akcja jest dunkcja i traktuja ja jako akcja z callbackiem (callback to dispatch)
export function fetchPosts() {
    const request = axios.get(rootUrl('/posts'));

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: FETCH_POSTS,
                payload: data
            });
        })
    }
}

export function createPost(props) {
    const request = axios.post(rootUrl('/posts'), props);
    console.log('submit', props);
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function findPost(id) {
    const request = axios.get(rootUrl(`/posts/${id}`));
    return {
        type: FIND_POST,
        payload: request
    }
}

export function deletePost(id) {
    const request = axios.delete(rootUrl(`/posts/${id}`));
    return {
        type: DELETE_POST,
        payload: request
    }
}