import { Request, Response, Router } from 'express';

const dish = Router();

dish.get('/', (request: Request, response: Response) => {
  console.log('ola');
});

export default dish;
