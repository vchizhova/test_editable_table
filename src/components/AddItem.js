import { useDispatch } from "react-redux";
import React, { Fragment, memo, useState } from "react";
import { addItem } from "../store/actions";

export const AddItem = memo(function () {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const changeTitleHandler = (e) => setTitle(e.target.value);

  const addItemHandler = () => {
    if (title) {
      dispatch(addItem({ title }));
      setTitle('');
    }
  };

  return (
    <Fragment>
      <h1>Add item</h1>
      <input value={title} onChange={changeTitleHandler} />
      <button onClick={addItemHandler}>Add</button>
    </Fragment>
  );
});
