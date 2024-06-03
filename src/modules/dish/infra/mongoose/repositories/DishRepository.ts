import { Model } from 'mongoose';
import { container } from 'tsyringe';

import DishModel, { IDish, DishSchema } from '../schemas/Dish';
import IDishRepository from '@server/modules/dish/repositories/IDishRepository';
import ICreateDishDTO from '@server/modules/dish/dtos/ICreateDishDTO';

export default class DishRepository implements IDishRepository {
  private ormRepository: Model<DishSchema>;

  constructor() {
    this.ormRepository = container.resolve(DishModel).dishModel;
  }

  public async create(dishData: ICreateDishDTO): Promise<IDish> {
    const dish = await this.ormRepository.create(dishData);

    return dish;
  }

  public async index(): Promise<IDish[]> {
    const dishes = await this.ormRepository.find();

    return dishes;
  }
}
