import ICreateUserDTO from '../dtos/ICreateUserDTO';
import { IUser } from '../infra/mongoose/schemas/User';

export default interface IUsersRepository {
  create: (userData: ICreateUserDTO) => Promise<IUser>;
  index: () => Promise<IUser[]>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
}
