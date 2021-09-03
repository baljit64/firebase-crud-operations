
import { FETCH_USER, SET_LIKE, REMOVE_LIKE, DELETE_ITEM } from '../actions/actionTypes';
let initialState = {
  users: null,
  name: null
}

export default function auth(state = initialState, action) {
  console.log("payload", action.payload)
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.payload
      }

    case REMOVE_LIKE:
      return {
        ...state,
        users: state.users.map(post => {
          if (post.id === action.payload) {
            return {
              ...post,
              like: false
            }
          }
          return post;
        })
      };
    case SET_LIKE:
      return {
        ...state,
        users: state.users.map(post => {
          if (post.id === action.payload) {
            return {
              ...post,
              like: true
            }
          }
          return post;
        })
      };
    case DELETE_ITEM:
      return {
        ...state,
        users: state.users.filter(users => users.id !== action.payload)
      };
    default:
      return state;
  }
}