import { injectable, inject } from 'tsyringe';
import { IUser } from '../infra/mongoose/schemas/User';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class GetAllUsersService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUsersRepository
  ) {}

  public async execute(): Promise<IUser[]> {
    const users = await this.userRepository.index();

    return users;
  }
}

export default GetAllUsersService;
