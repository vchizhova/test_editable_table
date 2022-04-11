import { mockData } from "../constants";
import { createStore } from "redux";

const initialState = {
  items: mockData,
};

const SAVE_TITLE = "SAVE_TITLE";
const DELETE_ITEM = "DELETE_ITEM";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TITLE:
      const index = state.items.findIndex((v) => v.id === action.payload.id);
      const items = [...state.items];
      items[index] = { ...items[index], title: action.payload.input };

      return { ...state, items: items };
    case DELETE_ITEM:
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      console.log(filteredItems)
      return { ...state, items: filteredItems };
    default:
      return state;
  }
};

export const saveTitle = (payload) => ({ type: SAVE_TITLE, payload });
export const deleteItem = (payload) => ({ type: DELETE_ITEM, payload });

export const store = createStore(reducer);
