import { Schema, Model, HydratedDocument } from 'mongoose';
import { injectable, inject } from 'tsyringe';
import IDatabase from '@server/shared/infra/mongoose/models/IMongoDatabase';

export interface UserSchema {
  id: string;
  name: string;
  email: string;
  password: string;
  manager: boolean;
  purchased: {
    dinner: number;
    lunch: number;
  };
}

const User = new Schema<UserSchema>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    manager: { type: Boolean, required: true },
    purchased: { type: Schema.Types.Mixed, required: true }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

@injectable()
class UserModel {
  public userModel: Model<UserSchema>;

  constructor(
    @inject('MongoConnections')
    private mongoConnections: IDatabase
  ) {
    const { connection } = this.mongoConnections.mongo_connections.RU;

    this.userModel = connection.model<UserSchema>('users', User);
  }
}

export default UserModel;
export type IUser = HydratedDocument<UserSchema>;
