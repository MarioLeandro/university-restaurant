import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateDishService from '@server/modules/dish/services/CreateDishService';
import GetAllDishesService from '@server/modules/dish/services/GetAllDishesService';

export default class DishController {
  async index(request: Request, response: Response) {
    const getAllDishesService = container.resolve(GetAllDishesService);

    const data = await getAllDishesService.execute();

    return response.json(data);
  }

  async create(request: Request, response: Response) {
    const { name, description, nutri_table, type } = request.body;

    const createDishService = container.resolve(CreateDishService);

    const dish = await createDishService.execute({
      name,
      description,
      nutri_table,
      type
    });

    return response.json(dish);
  }
}
