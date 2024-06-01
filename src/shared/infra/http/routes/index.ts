import { Router } from 'express';

import dishRouter from '@server/modules/dish/infra/http/routes/dish.routes';

const routes = Router();

routes.use('/dishes', dishRouter);

export default routes;
