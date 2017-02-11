import React from 'react';
import {connect} from 'react-redux';
import SelectedPostsSelector from '../selectors/selected_posts';
import {Link} from 'react-router';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';


const SelectedPostsList = (props) => {
    return (
        <ul className="list-group">
            <ReactCssTransitionGroup transitionName="fade"
                                     transitionEnterTimeout={500}
                                     transitionLeaveTimeout={500}>
            {
                props.posts.map(post => <Post key={post.id} {...post} />)
            }
            </ReactCssTransitionGroup>
        </ul>
    )
};

const Post = ({categories, id, title}) => {
    return (<li className="list-group-item" key={id}>
        <Link to={`/${id}`}>
            <span className="pull-xs-right">{categories}</span>
            <strong>{title}</strong>
        </Link>
    </li>)
};

const mapStateToProps = state => {
    return {
        posts: SelectedPostsSelector(state)
    }
};

export default connect(mapStateToProps, null)(SelectedPostsList);