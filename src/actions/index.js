import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_posts';

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

/**
 * Não preciso tratar essa condição no reducer somente chamar essa action na classe correta
 * @param values tem as informações que eu devo inserir no banco de dados
 * @param callback
 * @returns {{type: string, payload: AxiosPromise}}
 */
export function createPost(values, callback) {
  const url = `${ROOT_URL}${API_KEY}`;
  const request = axios.post(url, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request,
  };
}