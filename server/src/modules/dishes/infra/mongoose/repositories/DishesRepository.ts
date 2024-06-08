import { Model } from 'mongoose';
import { container } from 'tsyringe';

import DishModel, { IDish, DishSchema } from '../schemas/Dish';
import IDishesRepository from '@server/modules/dishes/repositories/IDishesRepository';
import ICreateDishDTO from '@server/modules/dishes/dtos/ICreateDishDTO';

export default class DishesRepository implements IDishesRepository {
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
