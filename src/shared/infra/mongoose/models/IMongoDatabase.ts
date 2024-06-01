import { IConnectionNames } from '@server/config/mongo';
import { Connection } from 'mongoose';

export type MongoConnections = {
  [connectionName in IConnectionNames]: {
    connection: Connection;
  };
};

export default interface IDatabase {
  mongo_connections: MongoConnections;
}
