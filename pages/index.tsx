import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import StockItems from '../components/StockItems/StockItems'
import * as S from '../styles/Home.styled';
import _ from "lodash";

type Props = {
  data: {
    instruments: []
  }
}

const Home = ({ data }: Props) => {
  const [stockData, setStockData] = useState(data);
  const [error, setError] = useState<boolean>(false);

  async function subscribe() {
    const res = await fetch("/api/stocks");
  
    if (res.status === 502) {
      await subscribe();
    } else if (res.status !== 200) {
      setError(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await subscribe();
    } else {
      const newData = JSON.parse((await res.text()).slice(5));

      if (!_.isEqual(stockData, newData)) {
        setStockData(newData);
      }
      
      await subscribe();
    }
  }

  useEffect(() => { 
    subscribe();
  }, []);

  if (error && !data) {
    return <div> There was an issue collecting the data</div>
  }

  const stockInfo = stockData ? stockData : data;

  return (
    <S.Container>
      <Head>
        <title>Ing stock information</title>
        <meta name="description" content="Ing stock information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Main>
        <h1>AEX</h1>
        <h2>Alle instrumenten in de AEX</h2>
        <StockItems stockItems={stockInfo.instruments} />
      </S.Main>
    </S.Container>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/stocks/`);
  const data = JSON.parse((await res.text()).slice(5));
  
  return { props: { data } };
}

export default Home
