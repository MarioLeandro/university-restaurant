import { Request, Response, NextFunction } from 'express';

export default (request: Request, _response: Response, next: NextFunction): void => {
  const page = parseInt(request.query.page as string, 10) || 1;
  const limit = parseInt(request.query.limit as string, 10) || undefined;

  // Calculo StartIndex(offset)
  const startIndex = (page - 1) * (limit || 1);

  const query = new RegExp(request.query.query as string, 'i') || /(.*)/i;
  const filters = (
    Array.isArray(request.query.filters) ? (request.query.filters as string[]) : [request.query.filters as string]
  ).reduce<{ [key: string]: RegExp }>((allFilters, filter) => {
    const [key, value] = filter?.split('=') || [];
    if (allFilters[key]) {
      return {
        ...allFilters,
        ...(key ? { [key]: new RegExp(`${allFilters[key].source}|^${value}$`, 'im') } : {})
      };
    }

    return {
      ...allFilters,
      ...(key ? { [key]: new RegExp(`^${value}$`, 'im') } : {})
    };
  }, {});

  // Capturando único valor esperado para ordenação
  let sort = {};
  if (request.query.sort) {
    const [sortName, sortValue] = (request.query.sort as string).split('=');
    sort = { [sortName]: sortValue };
  }

  request.pagination = { page, limit, startIndex, sort, query, filters };

  return next();
};
