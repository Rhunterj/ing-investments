import React from "react";
import StockItem from "../StockItem/StockItem";
import * as S from '../../styles/StockItems.styled';

type Props = {
  stockItems: StockDetailType[]
}

const StockItems: React.FC<Props> = ({ stockItems }) => {
  return (
    <S.Table>
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
    </S.Table>
  );
};

export default StockItems