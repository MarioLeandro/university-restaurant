import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetAllUsersService from '@server/modules/users/services/GetAllUsersService';
import CreateUserService from '@server/modules/users/services/CreateUserService';

export default class UsersController {
  async index(request: Request, response: Response) {
    const getAllUsersService = container.resolve(GetAllUsersService);

    const users = await getAllUsersService.execute();

    return response.json(users);
  }

  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      email,
      password
    });

    return response.json(user);
  }
}
