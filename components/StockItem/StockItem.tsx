import Link from 'next/link';
import { FC } from 'react';
import * as S from '../../styles/StockItem.styled';

interface StockItemProps {
  stockItem: StockItemType
}

const StockItem: FC<StockItemProps> = ({ stockItem }) => {
  const { name, currentPrice, closePrice, priceMutation, time, uid} = stockItem;
  const courseStatus = priceMutation > 0;
  const date = new Date(time)
  const normalizedTime = `${date.getHours()}:${date.getMinutes()}`;
  const differenceInPrice = currentPrice.value - closePrice.value;

  return (
    <S.Row courseStatus={courseStatus} key={uid}>
      <td><Link href={`/${name}`}>{name}</Link></td>
      <td>{currentPrice.value}</td>
      <td>{differenceInPrice.toFixed(3)}</td>
      <td>{priceMutation.toFixed(3)}</td>
      <td>{normalizedTime}</td>
    </S.Row>
  );
};

export default StockItem