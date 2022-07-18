
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