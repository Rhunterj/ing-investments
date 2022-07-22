import React, { FC } from "react";
import StockItem from "../StockItem/StockItem";
import * as S from './StockItems.styled';
import { StockDetailType, StockItemType } from "../../interaces/stock.interface";

interface StockItemsProps {
  stockItems: StockDetailType[]
}

const StockItems: FC<StockItemsProps> = ({ stockItems }) => {
  return (
    <S.StockItemsTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Difference</th>
          <th>Difference in %</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {stockItems.map((item: StockItemType) => {
          return <StockItem stockItem={item} key={item.uid} />
        })}
      </tbody>
    </S.StockItemsTable>
  );
};

export default StockItems