
type PriceType = {
  value: number;
  unit: string;
  percent: boolean;
}

type StockItemType = {
  uid: string
  name: string;
  time: string;
  priceMutation: number;
  currentPrice: PriceType;
  closePrice: PriceType;
  key: string;
}

type StockDetailType = {
  closePrice: PriceType,
  currency: string,
  currentPrice: PriceType,
  exchange: string,
  fundCode: number,
  highPrice: PriceType,
  instrumentTypeNumber: number,
  isin: string,
  lowPrice: PriceType,
  name: string,
  openPrice: PriceType,
  priceMutation: number,
  symbol: string,
  time: string,
}