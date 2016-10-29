import axios from 'axios';

export const FETCH_POSTS = Symbol('FETCH_POSTS');
export const CREATE_POST = Symbol('CREATE_POST');

import rootUrl from './root_url'

export function fetchPosts() {
    const request = axios.get(rootUrl('/posts'));
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(props) {
    const request = axios.post(rootUrl('/posts'), props);
    console.log('submit', props)
    return {
        type: CREATE_POST,
        payload: request
    }
}