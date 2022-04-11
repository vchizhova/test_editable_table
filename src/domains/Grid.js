import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Item } from "../components/Item";

function DraggbleGrid() {
  const { items } = useSelector((state) => state);
  const [data, setData] = useState([]);

  useEffect(() => {
    let rows = 0;
    const result = [];

    items.forEach((item, i) => {
      if (i % 4 === 0) {
        result.push([]);
        rows += 1;
      }
      result[rows - 1].push(item);
    });

    setData(result);
  }, [items]);

  return (
    <>
      {data?.map((row, rowIndex) => (
        <div key={`row_${rowIndex}`} className="row">
          {row?.map((item) => (
            <div key={item.id} className="item">
              <Item key={item.id} data={item} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default DraggbleGrid;
