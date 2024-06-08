import { container } from 'tsyringe';

import '@server/modules/users/providers';
import './providers';

import DishesRepository from '@server/modules/dishes/infra/mongoose/repositories/DishesRepository';
import IDishesRepository from '@server/modules/dishes/repositories/IDishesRepository';

import UsersRepository from '@server/modules/users/infra/mongoose/repositories/UsersRepository';
import IUsersRepository from '@server/modules/users/repositories/IUsersRepository';

container.registerSingleton<IDishesRepository>('DishesRepository', DishesRepository);
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
