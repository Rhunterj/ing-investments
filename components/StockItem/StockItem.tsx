import Link from 'next/link';
import { FC } from 'react';
import slugify from 'slugify';
import * as S from './StockItem.styled';
import { StockItemType } from '../../interaces/stock.interface';
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
    <S.StockItemRow className={`${hasChanged ? 'changeDetected' : ''}`} courseStatus={courseStatus} key={uid}>
      <S.StockItemCell><Link href={{ pathname: `/details/${slugify(name)}`, query: { name: name}}}>{name}</Link></S.StockItemCell>
      <S.StockItemCell>{currentPrice.value} EUR</S.StockItemCell>
      <S.StockItemCell>{profit + differenceInPrice.toFixed(2)} EUR</S.StockItemCell>
      <S.StockItemCell>{profit + priceMutation.toFixed(2)}%</S.StockItemCell>
      <S.StockItemCell>{normalizedTime}</S.StockItemCell>
    </S.StockItemRow>
  );
};

export default StockItem