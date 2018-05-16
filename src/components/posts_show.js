import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import Loader from '../components/loader';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        if (!this.props.post) {
            const { id } = this.props.match.params;
            this.props.fetchPost(id);
        }
    }

    onDeleteClick() {
        const { id } = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;
    // Check if we already have a post
        if (!post) {
            return <Loader />;
        }

        return (
            <div>
                <div className="row m-t-2">
                    <h3>{post.title}</h3>
                    <span className="m-b-2 label label-info">{post.categories}</span>
                    <p>{post.content}</p>
                </div>
                <div className="row m-t-2">
                    <button
                        className="btn btn-danger"
                        onClick={this.onDeleteClick.bind(this)}
                    >
                        Delete
                    </button>
                    <Link className="m-t-1 link-back" to="/">All Posts</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);