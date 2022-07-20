import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import * as S from '../../styles/StockDetailPage.styled';

type StockDetailProps = {
  pageData: StockDetailType
}
const StockDetailPage = ({ pageData }: StockDetailProps) => {
  if (!pageData) {
    return <div>There is no data available for this stock</div>
  };

  const { closePrice, currentPrice, name, priceMutation, lowPrice, highPrice, isin, symbol } = pageData;
  const differenceInPrice = currentPrice.value - closePrice.value;
  const courseStatus = priceMutation > 0;
  const profit = courseStatus ? '+' : '';

  return (
    <S.Container>
      <Head>
        <title>{name} details</title>
        <meta name="description" content={`${name} details`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <h1>{name}</h1>
        <Link href="/">Back to overview</Link>
        <S.Table courseStatus={courseStatus}>
          <S.TableBody>
            <S.Row>
              <S.Cell><S.Bold>Symbol</S.Bold> {symbol}</S.Cell>
            </S.Row>
            <S.Row>
              <S.Cell><S.Bold>CurrentValue</S.Bold> {currentPrice.value}</S.Cell>
            </S.Row>
            <S.Row>
              <S.Cell><S.Bold>Net change</S.Bold> {profit + differenceInPrice.toFixed(3)}/{profit + priceMutation.toFixed(3)}</S.Cell>
              </S.Row>
            <S.Row>
              <S.Cell><S.Bold>Isin</S.Bold> {isin}</S.Cell>
            </S.Row>
          </S.TableBody>

          <S.TableBody>
            <S.Row>
              <S.Cell><S.Bold>Previous close</S.Bold> {closePrice.value}</S.Cell>
            </S.Row>
            <S.Row>
              <S.Cell>
                <S.Bold>Highest price</S.Bold> {highPrice.value}</S.Cell>
              </S.Row>
            <S.Row>
              <S.Cell><S.Bold>Lowest price</S.Bold> {lowPrice.value}</S.Cell>
            </S.Row>
          </S.TableBody>
        </S.Table>
      </S.Main>
    </S.Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/stocks/`);
  const data = JSON.parse((await res.text()).slice(5));
  
  const pageData = data.instruments.filter((item: StockDetailType) => item.name === context.query.name)[0];

  return { props: { pageData } };
}

export default StockDetailPage