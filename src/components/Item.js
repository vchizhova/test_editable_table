import { useDispatch } from "react-redux";
import React, { useState, memo } from "react";
import { saveTitle, deleteItem } from "../store/actions";

export const Item = memo(function ({ data }) {
  const { title, id } = data;
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(title);
  const dispatch = useDispatch();

  const editInputTitle = () => {
    setEdit(!edit);
  };

  const changeInputTitle = (e) => {
    setInput(e.target.value);
  };

  const saveTitleHandler = () => {
    if (input) {
      dispatch(saveTitle({ ...data, input }));
    }

    setEdit(false);
  };

  const deleteItemHandler = () => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="block">
      {!edit && <div>{title}</div>}
      {edit && <input value={input} onChange={changeInputTitle} />}
      {!edit && <button onClick={editInputTitle}>Edit</button>}
      {edit && <button onClick={saveTitleHandler}>Save</button>}
      <button onClick={deleteItemHandler}>Delete</button>
    </div>
  );
});
