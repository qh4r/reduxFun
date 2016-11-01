import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {findPost, deletePost} from '../actions/index'


const GoBack = () => {
    return (
        <div className="text-xs-right">
            <Link to="/" className="text-xs-right btn btn-info">
                Wróć
            </Link>
        </div>
    )
};

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount(){
        this.props.findPost(this.props.params.id);
    }

    onDelete() {
        this.props.deletePost(this.props.params.id)
            .then(() => this.context.router.push('/'));
    }
    render() {
        if(!this.props.post){
            return <div>
               <GoBack/>
            </div>;
        }
        return (
            <div>
                <GoBack/>
                <div className="well well-lg">
                    <h5 className="pull-xs-right">
                        Kategorie: {this.props.post.categories}
                    </h5>
                    <h1>{this.props.post.title}</h1>
                    <h6>Treść</h6>
                    <p>
                        {this.props.post.content}
                    </p>
                    <button className="btn btn-danger pull-xs-right" onClick={this.onDelete.bind(this)}>
                        Usuń
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({posts: {post}}) {
    return {post};
}

export default connect(mapStateToProps, {findPost, deletePost})(PostsShow);

