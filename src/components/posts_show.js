import Recat, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Compponent {
    componentDidMount() {
        const { id } = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    helperFunction() {
        this.props.posts[this.props.match.params.id];
    }

    render() {
        const { post } = this.props;
        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);