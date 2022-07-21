import Link from 'next/link';
import { FC } from 'react';
import slugify from 'slugify';
import * as S from '../../styles/StockItem.styled';
import { StockItemType } from '../../utils/types';
import { usePrevious } from '../../utils/usePrevious';

interface StockItemProps {
  stockItem: StockItemType
}

const StockItem: FC<StockItemProps> = ({ stockItem }) => {
  const previousStatus = usePrevious<StockItemType>(stockItem);
  const { name, currentPrice, closePrice, priceMutation, time, uid} = stockItem;
  const courseStatus = priceMutation > 0;
  const date = new Date(time);
  const normalizedTime = `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
  const differenceInPrice = currentPrice.value - closePrice.value;
  const hasChanged = previousStatus && stockItem.currentPrice.value !== previousStatus?.currentPrice.value;
  const profit = courseStatus ? '+' : '';

  return (
    <S.Row className={`${hasChanged ? 'changeDetected' : ''}`} courseStatus={courseStatus} changeDetected={hasChanged} key={uid}>
      <S.Cell><Link href={{ pathname: `/details/${slugify(name)}`, query: { name: name}}}>{name}</Link></S.Cell>
      <S.Cell>{currentPrice.value} EUR</S.Cell>
      <S.Cell>{profit + differenceInPrice.toFixed(2)} EUR</S.Cell>
      <S.Cell>{profit + priceMutation.toFixed(2)}%</S.Cell>
      <S.Cell>{normalizedTime}</S.Cell>
    </S.Row>
  );
};

export default StockItem