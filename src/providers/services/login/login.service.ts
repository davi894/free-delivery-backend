import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/app.prisma.service';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class LoginService {
  constructor(private readonly prisma: PrismaService) {}

  async loginService(reqBody) {
    const { email, username, password } = reqBody;

    const secretKey = process.env.SECRET_KEY;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    const comparePassword = await bcrypt.compare(password, user.password);

    const token = jwt.sign(
      {
        type: user.email,
      },
      secretKey,
      {
        subject: user.id,
        expiresIn: '24h',
      },
    );

    return token;
  }
}
