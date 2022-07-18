import { FC } from 'react';
import * as S from '../../styles/StockItem.styled';

type PriceType = {
  value: number;
  unit: string;
  percent: boolean;
}

interface StockItemProps {
  stockItem: {
    name: string;
    time: string;
    priceMutation: number;
    currentPrice: PriceType;
    closePrice: PriceType;
  }
}

const StockItem: FC<StockItemProps> = ({ stockItem }) => {
  const { name, currentPrice, closePrice, priceMutation, time} = stockItem;
  const courseStatus = priceMutation > 0;
  const date = new Date(time)
  const normalizedTime = `${date.getHours()}:${date.getMinutes()}`;
  const differenceInPrice = currentPrice.value - closePrice.value;

  return (
    <S.Row courseStatus={courseStatus} key={name}>
      <td>{name}</td>
      <td>{currentPrice.value}</td>
      <td>{differenceInPrice.toFixed(3)}</td>
      <td>{priceMutation.toFixed(3)}</td>
      <td>{normalizedTime}</td>
    </S.Row>
  );
};

export default StockItem