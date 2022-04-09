//selectors
export const getAllPosts = state => state.posts;
export const getPostById = ({ posts }, id) => posts.find(post => post.id === id);
 
/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */

/* reducer */
const postsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;
