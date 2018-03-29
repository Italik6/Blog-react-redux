import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsNew extends Component {

    render() {
        return (
            <div>
               
            </div>
        )
    };
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts }) (PostsNew);