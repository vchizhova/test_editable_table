import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDrop } from "react-dnd";

import { setItems } from "../store/actions";
import { ItemTypes } from "../constants";
import { ItemDraggble } from "../components/ItemDraggble";

function WithGridCss() {
  const { items } = useSelector((state) => state);
  const dispatch = useDispatch();

  const findItem = useCallback(
    (id) => {
      const item = items.find((v) => v.id === id);

      return {
        item,
        index: items.findIndex((v) => v.id === id),
      };
    },
    [items]
  );

  const moveItem = useCallback(
    (id, atIndex) => {
      const { item, index } = findItem(id);
      const tempItems = items.concat();

      /* Old method 
       const temp = tempItems[atIndex];
       tempItems[atIndex] = tempItems[index];
       tempItems[index] = temp; */

      [tempItems[atIndex], tempItems[index]] = [
        tempItems[index],
        tempItems[atIndex],
      ];

      dispatch(setItems(tempItems));
    },
    [findItem, items, dispatch]
  );

  const [, drop] = useDrop(() => ({ accept: ItemTypes.ITEM }));

  return (
    <>
      <div ref={drop} className="container">
        {items.map((item) => (
          <div key={item.id} className="item">
            <ItemDraggble data={item} moveItem={moveItem} findItem={findItem} />
          </div>
        ))}
      </div>
    </>
  );
}

export default WithGridCss;
