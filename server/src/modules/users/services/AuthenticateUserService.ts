import { injectable, inject } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';
import { IUser } from '../infra/mongoose/schemas/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import AppError from '@server/shared/errors/AppError';
import jwt from 'jsonwebtoken';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: Partial<IUser>;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async execute(userData: IRequest): Promise<IResponse> {
    const userExists = await this.usersRepository.findByEmail(userData.email);

    if (!userExists) {
      throw new AppError('Credenciais Inválidas', 401);
    }

    const match = await this.hashProvider.compareHash(userData.password, userExists.password);

    if (!match) {
      throw new AppError('Credenciais Inválidas', 401);
    }

    const token = jwt.sign({ user: userExists.id }, process.env.SECRET || 'SECRET', {
      expiresIn: '8h'
    });

    const { password: _, ...user } = userExists.toJSON();

    return { user, token };
  }
}

export default AuthenticateUserService;
