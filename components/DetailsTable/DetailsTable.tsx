import { FC } from "react";
import { StockDetailType } from "../../interaces/stock.interface";
import * as S from "./DetailsTable.styled";

interface DetailsTableProps {
  stockItem: StockDetailType;
}

const DetailsTable: FC<DetailsTableProps> = ({ stockItem }) => {
  const {
    closePrice,
    currentPrice,
    priceMutation,
    lowPrice,
    highPrice,
    isin,
    symbol,
  } = stockItem;
  const differenceInPrice = currentPrice.value - closePrice.value;
  const courseStatus = priceMutation > 0;
  const profit = courseStatus ? "+" : "";

  return (
    <S.DetailsTable courseStatus={courseStatus}>
      <S.DetailsTableBody>
        <S.DetailsRow>
          <S.DetailsCell>
            <S.DetailsBold>Symbol</S.DetailsBold> {symbol}
          </S.DetailsCell>
        </S.DetailsRow>
        <S.DetailsRow>
          <S.DetailsCell>
            <S.DetailsBold>CurrentValue</S.DetailsBold> {currentPrice.value}
          </S.DetailsCell>
        </S.DetailsRow>
        <S.DetailsRow>
          <S.DetailsCell>
            <S.DetailsBold>Net change</S.DetailsBold> {profit + differenceInPrice.toFixed(3)}/
            {profit + priceMutation.toFixed(3)}
          </S.DetailsCell>
        </S.DetailsRow>
        <S.DetailsRow>
          <S.DetailsCell>
            <S.DetailsBold>Isin</S.DetailsBold> {isin}
          </S.DetailsCell>
        </S.DetailsRow>
      </S.DetailsTableBody>

      <S.DetailsTableBody>
        <S.DetailsRow>
          <S.DetailsCell>
            <S.DetailsBold>Previous close</S.DetailsBold> {closePrice.value}
          </S.DetailsCell>
        </S.DetailsRow>
        <S.DetailsRow>
          <S.DetailsCell>
            <S.DetailsBold>Highest price</S.DetailsBold> {highPrice.value}
          </S.DetailsCell>
        </S.DetailsRow>
        <S.DetailsRow>
          <S.DetailsCell>
            <S.DetailsBold>Lowest price</S.DetailsBold> {lowPrice.value}
          </S.DetailsCell>
        </S.DetailsRow>
      </S.DetailsTableBody>
    </S.DetailsTable>
  );
};

export default DetailsTable;
