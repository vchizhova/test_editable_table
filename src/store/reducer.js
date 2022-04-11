import { mockData } from "../constants";
import { ADD_ITEM, DELETE_ITEM, SAVE_TITLE } from "./actions";

const initialState = {
  items: mockData,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TITLE:
      const index = state.items.findIndex((v) => v.id === action.payload.id);
      const items = [...state.items];
      items[index] = { ...items[index], title: action.payload.input };

      return { ...state, items: items };
    case ADD_ITEM:
      const addedItems = [...state.items];
      const id = Math.max(...state?.items.map((v) => v.id)) + 1;
      addedItems.push({ ...action.payload, id });

      return { ...state, items: addedItems };
    case DELETE_ITEM:
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, items: filteredItems };
    default:
      return state;
  }
};