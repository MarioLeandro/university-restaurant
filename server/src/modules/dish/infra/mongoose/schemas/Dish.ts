import { Schema, Model, HydratedDocument } from 'mongoose';
import { injectable, inject } from 'tsyringe';
import IDatabase from '@server/shared/infra/mongoose/models/IMongoDatabase';

export interface DishSchema {
  id: string;
  name: string;
  description: string;
  picture?: string;
  nutri_table: any;
  type: string;
}

const Dish = new Schema<DishSchema>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: String, required: false },
    type: { type: String, required: true },
    nutri_table: { type: Schema.Types.Mixed, required: false }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

@injectable()
class DishModel {
  public dishModel: Model<DishSchema>;

  constructor(
    @inject('MongoConnections')
    private mongoConnections: IDatabase
  ) {
    const { connection } = this.mongoConnections.mongo_connections.RU;

    this.dishModel = connection.model<DishSchema>('dish', Dish);
  }
}

export default DishModel;
export type IDish = HydratedDocument<DishSchema>;
