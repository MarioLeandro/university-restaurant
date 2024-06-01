import 'dotenv/config';
import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';

import 'express-async-errors';

import AppError from '@server/shared/errors/AppError';

import routes from './routes';

import '@server/shared/container';
import '../mongoose';

const app = express();

app.use(express.json({ limit: '5120mb' }));

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});

const port = process.env.PORT || 3001;
app.listen(3002, () => {
  console.log(`🚀️ Running at HTTP port ${port}!`);
});
