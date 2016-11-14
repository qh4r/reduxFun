import _ from 'lodash';
import { createSelector } from 'reselect';

const postsSelecter = state => state.posts.all;
const selectedPostsSelector = state => state.selectedPostsIds;

const getPosts = (posts, selectedPostsIds) => {

    // alternatywa dla contains i indexOf
    const selectedPosts = _.filter(
        posts,
        post => _.contains(selectedPostsIds, post.id)
    );

    return selectedPosts
};



export default createSelector(
    postsSelecter,
    selectedPostsSelector,
    getPosts // ta funkcja musi przyjmowac tyle parametrow ile jest przed nia wattosci
);

