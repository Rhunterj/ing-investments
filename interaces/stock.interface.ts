
export interface PriceType {
  value: number;
  unit: string;
  percent: boolean;
}

export interface StockItemType {
  uid?: string
  name: string;
  time: string;
  priceMutation: number;
  currentPrice: PriceType;
  closePrice: PriceType;
  key?: string;
}

export interface StockDetailType {
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

export interface StockItemsType {
  indexInstrument: {},
  instruments: StockDetailType[]
}

export interface RowType {
  courseStatus: boolean
}