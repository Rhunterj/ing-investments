import { rest } from 'msw';
import StockItemsMock from './StockItemsMock';

const getTasksPath = 'http://localhost/api/stocks';

const tasksHandler = rest.get(getTasksPath, async (req, res, ctx) =>
  res(ctx.json(StockItemsMock))
);

export const tasksHandlerException = rest.get(
  getTasksPath,
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
);

export const handlers = [tasksHandler];