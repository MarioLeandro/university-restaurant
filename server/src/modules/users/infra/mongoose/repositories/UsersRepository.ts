import { Model } from 'mongoose';
import { container } from 'tsyringe';

import UserModel, { IUser, UserSchema } from '../schemas/User';
import IUsersRepository from '@server/modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@server/modules/users/dtos/ICreateUserDTO';

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Model<UserSchema>;

  constructor() {
    this.ormRepository = container.resolve(UserModel).userModel;
  }

  public async create(userData: ICreateUserDTO): Promise<IUser> {
    const user = await this.ormRepository.create(userData);

    return user;
  }

  public async index(): Promise<IUser[]> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async findById(id: string): Promise<IUser | null> {
    const user = await this.ormRepository.findById<IUser>(id);

    return user;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.ormRepository.findOne<IUser>({ email });

    return user;
  }
}
