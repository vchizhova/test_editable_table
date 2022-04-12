import { mockData } from "../constants";
import { setItems } from "../store/actions";

export const fetchItems = (count) => {
  return (dispatch) => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData(count));
      }, 2000);
    }).then((data) => dispatch(setItems(data)));

    // return fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    // .then(json => dispatch(setItems(json)))
  };
};
