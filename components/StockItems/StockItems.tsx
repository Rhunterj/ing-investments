import React from "react";
import StockItem from "../StockItem/StockItem";

type Props = {
  stockItems: []
}

const StockItems: React.FC<Props> = ({ stockItems }) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Course</th>
        <th>Difference</th>
        <th>Difference in percentage</th>
        <th>Time</th>
      </tr>
      {stockItems.map((stockItem) => {
        return <StockItem stockItem={stockItem} />
      })}
    </table>
  );
};

export default StockItems