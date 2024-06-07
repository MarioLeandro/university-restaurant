import { injectable, inject } from 'tsyringe';
import { IDish } from '../infra/mongoose/schemas/Dish';
import IDishRepository from '../repositories/IDishRepository';

@injectable()
class GetAllDishesService {
  constructor(
    @inject('DishRepository')
    private dishRepository: IDishRepository
  ) {}

  public async execute(): Promise<IDish[]> {
    const data = await this.dishRepository.index();

    return data;
  }
}

export default GetAllDishesService;
