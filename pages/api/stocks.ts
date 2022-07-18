import { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

import { cors, runMiddleware } from '../../utils/api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await runMiddleware(req, res, cors);
  } catch (e: any) {
    return res.status(403).send(e?.message || 'CORS error');
  }

  return httpProxyMiddleware(req, res, {
    target: 'https://www.ing.nl/api/',
    changeOrigin: true,
    pathRewrite: [
      {
        patternStr: '^/stocks',
        replaceStr: '/',
      },
    ],
  });
};