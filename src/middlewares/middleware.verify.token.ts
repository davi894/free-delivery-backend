import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { Error } from 'src/errors/error';

@Injectable()
export class CustomMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    const selectToken = token.split(' ');
    jwt.verify(
      selectToken[1],
      process.env.SECRET_KEY,
      (error, decoded: any) => {
        if (error) {
          throw new Error('Forbidden', HttpStatus.FORBIDDEN);
        }
        req.user = {
          id: decoded.sub,
        };
        return next();
      },
    );
  }
}
