import { Router } from 'express';
import DishController from '../controllers/DishController';
import { celebrate, Joi, errors, Segments } from 'celebrate';

const dish = Router();
const dishController = new DishController();

dish.get('/', dishController.index);

dish.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
      nutri_table: Joi.object(),
      type: Joi.string().required(),
      picture: Joi.any()
    }
  }),
  dishController.create
);

export default dish;
