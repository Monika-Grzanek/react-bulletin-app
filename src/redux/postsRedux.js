import shortid from 'shortid';

//selectors
export const getAllPosts = state => state.posts.data;
export const getPostById = ({ posts }, id) => posts.data.find(post => post.id === id);
export const getPostsByAuthor = ({posts}) => posts.data.filter(post => post.idUser === posts.user.idUser);


/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

/* action creators */
export const addPost = (payload) => ({ type: ADD_POST, payload });
export const editPost = (payload) => ({type: EDIT_POST, payload});

/* thunk creators */

/* reducer */
const postsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_POST:
      return {...statePart, data: [...statePart.data, {id: shortid(), ...action.payload}]} ;
      case EDIT_POST:
        return {...statePart, data: statePart.data.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post))};
    default:
      return statePart;
  };
};

export default postsReducer;
