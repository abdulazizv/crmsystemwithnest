import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const now = new Date();
    const method = req.method;
    const url = req.url;
    console.log(`vaqti - ${now} methodi - ${method} url - ${url} `);
    next();
  }
}
