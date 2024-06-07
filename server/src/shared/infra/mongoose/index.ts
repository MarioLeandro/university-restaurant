import { container } from 'tsyringe';
import Database from './implementations/MongoDatabase';
import IDatabase from './models/IMongoDatabase';

export default container.registerSingleton<IDatabase>('MongoConnections', Database);
