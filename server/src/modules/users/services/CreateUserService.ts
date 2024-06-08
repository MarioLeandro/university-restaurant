import { injectable, inject } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';
import { IUser } from '../infra/mongoose/schemas/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import AppError from '@server/shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async execute(userData: IRequest): Promise<IUser> {
    const userExists = await this.usersRepository.findByEmail(userData.email);

    if (userExists) {
      throw new AppError('O e-mail fornecido já está em uso', 400);
    }

    const hashedPass = await this.hashProvider.generateHash(userData.password);

    const user = await this.usersRepository.create({
      ...userData,
      password: hashedPass,
      purchased: {
        dinner: 0,
        lunch: 0
      },
      manager: false
    });

    return user;
  }
}

export default CreateUserService;
