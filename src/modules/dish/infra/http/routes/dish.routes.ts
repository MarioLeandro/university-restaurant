import { Router } from 'express';
import DishController from '../controllers/DishController';

const dish = Router();
const dishController = new DishController();

dish.get('/', dishController.index);

dish.post('/', dishController.create);

export default dish;
