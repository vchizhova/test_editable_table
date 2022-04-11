export const SET_ITEMS = "SET_ITEMS";
export const SAVE_TITLE = "SAVE_TITLE";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const saveTitle = (payload) => ({ type: SAVE_TITLE, payload });
export const addItem = (payload) => ({ type: ADD_ITEM, payload });
export const deleteItem = (payload) => ({ type: DELETE_ITEM, payload });
export const setItems = (payload) => ({ type: SET_ITEMS, payload });