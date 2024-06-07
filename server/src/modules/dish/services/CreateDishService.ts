import { injectable, inject } from 'tsyringe';
import ICreateDishDTO from '../dtos/ICreateDishDTO';
import IDishRepository from '../repositories/IDishRepository';
import { IDish } from '../infra/mongoose/schemas/Dish';

@injectable()
class CreateDishService {
  constructor(
    @inject('DishRepository')
    private dishRepository: IDishRepository
  ) {}

  public async execute(dishData: ICreateDishDTO): Promise<IDish> {
    const dish = await this.dishRepository.create(dishData);

    return dish;
  }
}

export default CreateDishService;
