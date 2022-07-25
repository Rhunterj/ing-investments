import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { FC, useEffect, useState } from 'react'
import StockItems from '../components/StockItems/StockItems'
import { isEqual } from "lodash";
import { StockItemsType } from '../interaces/stock.interface';
import Main from '../components/Main/Main';
import Container from '../components/Container/Container';

interface OverviewPageProps {
  data?: StockItemsType
}

const Home: FC<OverviewPageProps> = ({ data }) => {
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
      if (!isEqual(stockData, newData)) {
        setStockData(newData);
      }
      
      setError(false)
      await subscribe();
    }
  }

  useEffect(() => { 
    subscribe();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  if (error || !data) {
    return <div> There was an issue collecting the data</div>
  }

  const stockInfo = stockData ? stockData : data;

  return (
    <Container>
      <Head>
        <title>Ing stock information</title>
        <meta name="description" content="Ing stock information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>AEX</h1>
        <h2>Alle instrumenten in de AEX</h2>
        <StockItems stockItems={stockInfo.instruments} />
      </Main>
    </Container>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/stocks/`);
  const data = JSON.parse((await res.text()).slice(5));
  
  return { props: { data } };
}

export default Home
