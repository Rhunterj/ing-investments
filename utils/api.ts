import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

export const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (req: NextApiRequest, res: NextApiResponse, result: any) => void,
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: Error | JSON) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

const corsAllowList = [
  'http://localhost:3000',
];

export const cors = Cors({
  origin: function (origin: any, callback: any) {
    if (origin && corsAllowList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS origin not allowed: ${origin}`));
    }
  },
});