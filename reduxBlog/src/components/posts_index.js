import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

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
        console.log('props', this.props.posts)
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/new">
                        Nowy Post
                    </Link>
                </div>
                <h3>Posty</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }

    renderPosts() {
        return this.props.posts.map(({categories, id, title}) => {
            return (<li className="list-group-item" key={id}>
                <Link to={`/${id}`}>
                    <span className="pull-xs-right">{categories}</span>
                    <strong>{title}</strong>
                </Link>
            </li>)
        });
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts}, dispatch);
}

function mapStateToProps({posts}) {
    return {posts: posts.all}
}

//export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
// zamiast tego mozna
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);