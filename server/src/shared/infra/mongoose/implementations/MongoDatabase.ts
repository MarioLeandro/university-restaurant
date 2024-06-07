import connections, { IConnection } from '@server/config/mongo';
import mongoose from 'mongoose';
import IDatabase, { MongoConnections } from '../models/IMongoDatabase';

export default class Database implements IDatabase {
  public mongo_connections = {} as MongoConnections;

  constructor() {
    connections.forEach((connection) => {
      this.initMongo(connection);
    });
  }

  private initMongo(connection: IConnection): void {
    try {
      const connectionInstance = mongoose.createConnection(connection.connection, connection.config);

      /* Error After initial Connection */
      connectionInstance.on('error', console.error.bind(console, `Connection [${connection.name}] error:`));
      connectionInstance.on('disconnected', () => {
        console.error(`MongoDB Connection [${connection.name}] disconnected! Reconnecting in ${60000 / 1000}s...`);
        /* Retry connection after 1 minute */
        const timeoutID = setTimeout(() => {
          clearTimeout(timeoutID);
          connectionInstance.removeAllListeners();
          connectionInstance.close();
          connectionInstance.startSession();
        }, 60000);
      });
      connectionInstance.once('open', () =>
        console.info(`MongoDB Connection [${connection.name}] has been established successfully.`)
      );

      this.mongo_connections[connection.name] = {
        connection: connectionInstance
      };
    } catch (error) {
      /* Error during initial connection */
      console.error(`MongoDB Connection [${connection.name}] error: `, error, `Reconnecting in ${60000 / 1000}s...`);
      /* Retry connection after 1 minute */
      const timeoutID = setTimeout(() => {
        clearTimeout(timeoutID);
        this.initMongo(connection);
      }, 60000);
    }
  }
}
