import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { saveTitle, deleteItem } from "../store";

export function Item({ data }) {
  const { title, id } = data;
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");
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
    setInput("");
  };

  const deleteItemHandler = () => {
      dispatch(deleteItem(id));
  };

  return (
    <>
      <div key={id}>
        <div>{title}</div>
        {edit && <input value={input} onChange={changeInputTitle} />}
        {!edit && <button onClick={editInputTitle}>Edit</button>}
        {edit && <button onClick={saveTitleHandler}>Save</button>}
        <button onClick={deleteItemHandler}>Delete</button>
      </div>
    </>
  );
}
