import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts, updateSelection} from '../actions/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import SelectedPostsList from './selectedPostsList';

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
        console.log('props', this.props.selectedPostsIds);
        return (
            <div>
                {(this.props.selectedPostsIds.length) ?
                    <div>
                        <h3>Aktualnie wybrane:</h3>
                        <SelectedPostsList />
                        <br />
                    </div>
                    : ''
                }
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/new">
                        Nowy Post
                    </Link>
                </div>
                <h3>Wszystkie Posty</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }

    renderPosts() {
        return this.props.posts.map(({categories, id, title}) => {
            return (<li className="list-group-item" key={id}>
                <input type="checkbox" defaultChecked={this.props.selectedPostsIds.indexOf(id) != -1}
                       onClick={this.props.updateSelection.bind(this, id)} className="checkbox"></input>
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

function mapStateToProps({posts, selectedPostsIds}) {
    return {posts: posts.all, selectedPostsIds}
}

//export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
// zamiast tego mozna
export default connect(mapStateToProps, {fetchPosts, updateSelection})(PostsIndex);