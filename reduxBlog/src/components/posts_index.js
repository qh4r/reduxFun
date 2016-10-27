import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import { bindActionCreators } from 'redux';

class PostsIndex extends Component {

    constructor(props) {
        super(props)
    }

    //lifecycle methods
    componentWillMount() {
        this.props.fetchPosts();
        console.log('will');
    }

    componentDidMount() {
        console.log('did');
    }

    render() {
        console.log(this.props.posts);
        return (
            <div>list</div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts}, dispatch);
}

function mapStateToProps({posts}) {
    return {posts}
}

//export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
// zamiast tego mozna
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);