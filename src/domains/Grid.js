import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Item } from "../components/Item";
import { fetchItems } from "../asyncActions";

import List from "react-virtualized/dist/commonjs/List";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

const rowHeight = 120;

function Grid() {
  const { items } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchItems(2000));
  }, []);

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

  const renderRow = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className="row">
        {data[index]?.map((item) => (
          <div key={item.id} className="item">
            <Item key={item.id} data={item} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <AutoSizer style={{ height: "100vh" }}>
      {({ height, width }) => (
        <List
          width={width}
          height={height}
          rowHeight={rowHeight}
          rowRenderer={renderRow}
          rowCount={data.length}
          overscanRowCount={3}
        />
      )}
    </AutoSizer>
  );
}

export default Grid;
