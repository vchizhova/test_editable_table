import { createStore } from "redux";
import { reducer } from "./reducer";

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem('state') || undefined;
    return savedState && JSON.parse(savedState);
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const persistedStore = loadFromLocalStorage();

export const store = createStore(reducer, persistedStore);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
})
