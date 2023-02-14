import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  const now = new Date();
  const method = req.method;
  const url = req.url;
  console.log(`vaqti - ${now} methodi - ${method} url - ${url} `);
  next();
}
