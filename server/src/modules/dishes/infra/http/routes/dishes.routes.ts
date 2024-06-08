import { Router } from 'express';
import DishesController from '../controllers/DishesController';
import { celebrate, Joi, Segments } from 'celebrate';

const dishesRouter = Router();
const dishesController = new DishesController();

dishesRouter.get('/', dishesController.index);

dishesRouter.post(
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
  dishesController.create
);

export default dishesRouter;
