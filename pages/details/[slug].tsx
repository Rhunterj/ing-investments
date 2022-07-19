import { GetServerSideProps } from "next";
 
type StockDetailProps = {
  pageData: StockDetailType
}
const StockDetailPage = ({ pageData }: StockDetailProps) => {
  if (!pageData) {
    return <div>There is no data available for this stock</div>
  };

  const { closePrice, currentPrice, openPrice, name, currency, priceMutation } = pageData;
  
  return (
    <div>{name}</div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/stocks/`);
  const data = JSON.parse((await res.text()).slice(5));
  
  const pageData = data.instruments.filter((item: StockDetailType) => item.name === context.query.name)[0];

  return { props: { pageData } };
}

export default StockDetailPage