import React, { memo } from "react";
import clsx from "clsx";

import { useDrag, useDrop } from "react-dnd";

import { ItemTypes } from "../constants";
import { Item } from "./Item";

export const ItemDraggble = memo(function ({ data, findItem, moveItem }) {
  const { id } = data;
  const originalIndex = findItem(id).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.ITEM,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveItem(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveItem]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.ITEM,
      hover({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findItem(id);
          moveItem(draggedId, overIndex);
        }
      },
    }),
    [findItem, moveItem]
  );

  return (
    <div
      className={clsx("draggble", { hidden: isDragging })}
      ref={(node) => drag(drop(node))}
    >
      <Item data={data} />
    </div>
  );
});
