import { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

import { cors, runMiddleware } from '../../utils/api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
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