import { container } from 'tsyringe';

import DishRepository from '@server/modules/dish/infra/mongoose/repositories/DishRepository';
import IDishRepository from '@server/modules/dish/repositories/IDishRepository';

container.registerSingleton<IDishRepository>('DishRepository', DishRepository);
