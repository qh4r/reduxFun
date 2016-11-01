import axios from 'axios';
import firebase from 'firebase';
import uuid from 'uuid';

export const FETCH_POSTS = Symbol('FETCH_POSTS');
export const CREATE_POST = Symbol('CREATE_POST');
export const FIND_POST = Symbol('FIND_POST');
export const DELETE_POST = Symbol('DELETE_POST');

import rootUrl from './root_url'

// 2 krokowa inicjalizacja firebase
firebase.initializeApp({
    databaseURL: 'https://blogtest-7e122.firebaseio.com/'
});

const Posts = firebase.database().ref();
// PRZYKłAD UZYCIA REDUX-THUNK
// pozwala dispatchowac - bardziej niskopoziomowy middleware niz redux promise
// musi byc uzyty w combine middlewares by dzialac
// wykrywa gdy akcja jest dunkcja i traktuja ja jako akcja z callbackiem (callback to dispatch)
function fetchPostsOld() {
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

//using firebase
export function fetchPosts() {
    return dispatch => {
        Posts.on('value', snapshot => {
            dispatch({
                type: FETCH_POSTS,
                payload: snapshot.val()
            });
        })
    }
}

function createPostOld(props) {
    const request = axios.post(rootUrl('/posts'), props);
    console.log('submit', props);
    return {
        type: CREATE_POST,
        payload: request
    }
}

// mozna zwrocic promise dzieki middlewarowi promise
export function createPost(props){
    return new Promise(resolve => {
        resolve({
            type: CREATE_POST,
            payload: Posts.push(props)
        })
    });
    // return {
    //     type: CREATE_POST,
    //     payload: new Promise((x) => x(Posts.push(props)))
    // }
}

function findPostOld(id) {
    const request = axios.get(rootUrl(`/posts/${id}`));
    return {
        type: FIND_POST,
        payload: request
    }
}

export function findPost(id) {
    return dispatch => {
        Posts.child(id).on('value', data => {
            dispatch({
                type: FIND_POST,
                payload: data.val()
            })
        })
    }
}
function deletePostOld(id) {
    const request = axios.delete(rootUrl(`/posts/${id}`));
    return {
        type: DELETE_POST,
        payload: request
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: Posts.child(id).remove()
    }
}