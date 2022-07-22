import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { StockDetailType } from "../../interaces/stock.interface";
import DetailsTable from '../../components/DetailsTable/DetailsTable';
import { FC } from "react";
import Main from "../../components/Main/Main";
import Container from "../../components/Container/Container";

interface StockDetailProps {
  pageData?: StockDetailType
}

const StockDetailPage: FC<StockDetailProps> = ({ pageData }) => {
  if (!pageData) {
    return <div>There is no data available for this stock</div>
  };

  const { name } = pageData;

  return (
    <Container>
      <Head>
        <title>{name} details</title>
        <meta name="description" content={`${name} details`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>{name}</h1>
        <Link href="/">Back to overview</Link>
        <DetailsTable stockItem={pageData} />
      </Main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/stocks/`);
  const data = JSON.parse((await res.text()).slice(5));
  
  const pageData = data.instruments.filter((item: StockDetailType) => item.name === context.query.name)[0];

  return { props: { pageData } };
}

export default StockDetailPage