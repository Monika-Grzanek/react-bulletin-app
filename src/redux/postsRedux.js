import shortid from 'shortid';
import { API_URL } from '../config';

//selectors
export const getAllPosts = state => state.posts.data;
export const getPostById = ({ posts }, _id) => posts.data.find(post => post._id === _id);
export const getPostsByAuthor = ({posts}) => posts.data.filter(post => post.idUser === posts.user.idUser);

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
const UPDATE_POSTS = createActionName('UPDATE_POSTS');

/* action creators */
export const addPost = (payload) => ({ type: ADD_POST, payload });
export const editPost = (payload) => ({type: EDIT_POST, payload});
export const updatePosts = (payload) => ({ type: UPDATE_POSTS, payload});
export const fetchPosts = () => {
  return (dispatch) => {
    fetch(API_URL + '/posts')
      .then(res => res.json())
      .then(posts => {
        dispatch(updatePosts(posts))
      })
  }
};

/* thunk creators */

export const editPostRequest = (newEditedPost) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEditedPost)
  };
  fetch(API_URL + '/posts' + newEditedPost.id + '/edit', options)
    .then(() => dispatch(editPost(newEditedPost)))
  }
};

/* reducer */
const postsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_POST:
      return {...statePart, data: [...statePart.data, {id: shortid(), ...action.payload}]} ;
      case EDIT_POST:
        return {...statePart, data: statePart.data.map(post => (post._id === action.payload._id ? { ...post, ...action.payload } : post))};
      case UPDATE_POSTS:
        return {...statePart, data: [...action.payload]}
    default:
      return statePart;
  };
};

export default postsReducer;
