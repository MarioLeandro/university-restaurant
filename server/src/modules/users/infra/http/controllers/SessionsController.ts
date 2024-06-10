import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@server/modules/users/services/AuthenticateUserService';

export default class SessionsController {
  async login(request: Request, response: Response) {
    const { email, password } = request.body;

    console.log('chegou aki');

    const authenticateUserService = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUserService.execute({
      email,
      password
    });

    return response.json({ user, token });
  }
}
