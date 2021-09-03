import * as actionType from './actionTypes'

export const fetchUser = (data) => ({ type: actionType.FETCH_USER, payload: data });
export const likeItem = (id) => ({ type: actionType.SET_LIKE, payload: id });
export const dislikeItem = (id) => ({ type: actionType.REMOVE_LIKE, payload: id });
export const deleteItem = (id) => ({ type: actionType.DELETE_ITEM, payload: id });