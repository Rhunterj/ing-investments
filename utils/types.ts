
export type PriceType = {
  value: number;
  unit: string;
  percent: boolean;
}

export type StockItemType = {
  uid?: string
  name: string;
  time: string;
  priceMutation: number;
  currentPrice: PriceType;
  closePrice: PriceType;
  key?: string;
}

export type StockDetailType = {
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

export type StockItemsType = {
  indexInstrument: {},
  instruments: StockDetailType[]
}