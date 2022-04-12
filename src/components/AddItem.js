import { useDispatch } from "react-redux";
import React, { memo, useState } from "react";
import { addItem } from "../store/actions";

export const AddItem = memo(function () {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const changeTitleHandler = (e) => setTitle(e.target.value);

  const addItemHandler = (e) => {
    e.preventDefault();

    if (title) {
      dispatch(addItem({ title }));
      setTitle("");
    }
  };

  return (
    <form className="add-container" onSubmit={addItemHandler}>
      <input
        placeholder="Enter title"
        value={title}
        onChange={changeTitleHandler}
      />
      <button type="submit">Add item</button>
    </form>
  );
});
