import { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

const StockApi = async (req: NextApiRequest, res: NextApiResponse) => {
  return httpProxyMiddleware(req, res, {
    target: 'https://www.ing.nl/api/securities/web/markets/stockmarkets/AEX',
    changeOrigin: true,
    pathRewrite: [
      {
        patternStr: '^/api/stocks',
        replaceStr: '/',
      },
    ],
  });
};


export default StockApi