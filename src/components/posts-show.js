import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost } from "../actions/index";

class PostsShow extends Component {
  componentDidMount() {
    //pega os parâmtros da url
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return(
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <Link to="/">
          { '<<' } Back to home
        </Link>
        <h3>{ post.title }</h3>
        <h6>{ post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}

/**
 * Pega um único post do objeto geral de posts
 * @param posts
 * @param ownProps propriedades desse objeto
 * @returns {{post: *}}
 */
function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id],
  };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);