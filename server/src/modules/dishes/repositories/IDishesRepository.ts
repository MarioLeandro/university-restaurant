import ICreateDishDTO from '../dtos/ICreateDishDTO';
import { IDish } from '../infra/mongoose/schemas/Dish';

export default interface IDishesRepository {
  create: (filter: ICreateDishDTO) => Promise<IDish>;
  index: () => Promise<IDish[]>;
}
