import { Controller, Post, Req, Res } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { LoginService } from 'src/services/login/login.service';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:./dev_qa.db',
    },
  },
});

export class UserDto {
  email: string;
  password: string;
}

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post('')
  async login(@Req() req: Request, @Res() res: Response) {
    return res.status(200).json({ rota: 'funcioan' });
  }
}
