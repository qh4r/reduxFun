import axios from 'axios';

export const FETCH_POSTS = Symbol('FETCH_POSTS');

import rootUrl from './root_url'

export function fetchPosts() {
    const request = axios.get(rootUrl('/posts'));
    return {
        type: FETCH_POSTS,
        payload: request
    };
}