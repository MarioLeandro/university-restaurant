import ICreateDishDTO from '../dtos/ICreateDishDTO';
import { IDish } from '../infra/mongoose/schemas/Dish';

export default interface IDishRepository {
  create: (filter: ICreateDishDTO) => Promise<IDish>;
  index: () => Promise<IDish[]>;
}
