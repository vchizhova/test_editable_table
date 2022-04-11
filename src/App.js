import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./App.css";

import { Item } from "./components/Item";

function App() {
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
        <div key={"row" + rowIndex} className="row">
          {row?.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      ))}
    </>
  );
}

export default App;
