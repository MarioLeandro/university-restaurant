import { injectable, inject } from 'tsyringe';
import ICreateDishDTO from '../dtos/ICreateDishDTO';
import IDishesRepository from '../repositories/IDishesRepository';
import { IDish } from '../infra/mongoose/schemas/Dish';

@injectable()
class CreateDishService {
  constructor(
    @inject('DishesRepository')
    private dishesRepository: IDishesRepository
  ) {}

  public async execute(dishData: ICreateDishDTO): Promise<IDish> {
    const dish = await this.dishesRepository.create(dishData);

    return dish;
  }
}

export default CreateDishService;
