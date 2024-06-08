import { injectable, inject } from 'tsyringe';
import { IDish } from '../infra/mongoose/schemas/Dish';
import IDishesRepository from '../repositories/IDishesRepository';

@injectable()
class GetAllDishesService {
  constructor(
    @inject('DishRepository')
    private dishRepository: IDishesRepository
  ) {}

  public async execute(): Promise<IDish[]> {
    const data = await this.dishRepository.index();

    return data;
  }
}

export default GetAllDishesService;
