import { Router } from 'express';

import dishesRouter from '@server/modules/dishes/infra/http/routes/dishes.routes';
import usersRouter from '@server/modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@server/modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/dishes', dishesRouter);

export default routes;
