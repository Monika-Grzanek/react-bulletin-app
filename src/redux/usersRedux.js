//selectors
export const getUser = ({posts}) => posts.user;
//export const getRoleUser = ({posts}) => posts.user.role;

/* action name creator */
const reducerName = 'user';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_USER_STATUS = createActionName('CHANGE_USER_STATUS');
/* action creators */
export const changeUserStatus = (payload) => ({payload, type: CHANGE_USER_STATUS });

/* reducer */

const usersReducer = (statePart = [], action = {}) => {
    switch (action.type) {
      case CHANGE_USER_STATUS: {
        return {...statePart, user: {...statePart.user, logged: action.payload}}
      }
      default:
        return statePart;
    };
};

export default usersReducer;