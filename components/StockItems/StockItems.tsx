import React from "react";
import StockItem from "../StockItem/StockItem";

type Props = {
  stockItems: []
}

const StockItems: React.FC<Props> = ({ stockItems }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Difference</th>
          <th>Difference in percentage</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {stockItems.map((item: StockItemType) => {
          return <StockItem stockItem={item} key={item.uid} />
        })}
      </tbody>
    </table>
  );
};

export default StockItems