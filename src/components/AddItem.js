import { useDispatch } from "react-redux";
import React, { Fragment, memo, useState } from "react";
import { addItem } from "../store/actions";

export const AddItem = memo(function () {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const changeTitleHandler = (e) => setTitle(e.target.value);

  const addItemHandler = () => {
    if (title) {
      dispatch(addItem({ title }));
      setTitle("");
    }
  };

  return (
    <form className="add-container">
      <input
        placeholder="Enter title"
        value={title}
        onChange={changeTitleHandler}
      />
      <button type="submit" onClick={addItemHandler}>
        Add item
      </button>
    </form>
  );
});
