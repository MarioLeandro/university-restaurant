import { ConnectOptions } from 'mongoose';

export type IConnectionNames = 'RU';

export type IConnection = {
  name: IConnectionNames;
  connection: string;
  config: ConnectOptions | undefined;
};

export default [
  {
    name: 'RU',
    connection: process.env.MONGO_URI,
    config: {}
  }
] as Array<IConnection>;
