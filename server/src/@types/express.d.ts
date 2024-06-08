declare namespace Express {
  export interface Request {
    user: {
      id?: string;
      exp?: number;
      token: string;
      refreshToken: string;
    };
    pagination: {
      page: number;
      limit?: number;
      startIndex: number;
      sort: { [sortName: string]: 'asc' | 'desc' | undefined };
      query: RegExp;
      filters: { [filterName: string]: RegExp };
    };
  }

  export interface Response {
    swaggerDoc: Record<string, unknown>;
  }
}
