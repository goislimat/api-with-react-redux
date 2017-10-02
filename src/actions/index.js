import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts?';
const API_KEY = 'key=gogixx';

export function fetchPosts() {
  //montar a url para buscar os posts
  //http://reduxblog.herokuapp.com/api/posts?key=gogixx
  const url = `${ROOT_URL}${API_KEY}`;
  //buscar com o axios
  const request = axios.get(url);

  //retornar o objeto que action montou para os reducers
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}