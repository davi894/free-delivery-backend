import { HttpStatus, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/app.prisma.service';
import { Error } from 'src/providers/errors/error';

@Injectable()
export class LoginService {
  constructor(private readonly prisma: PrismaService) {}

  async loginService(reqBody) {
    const { email, password } = reqBody;

    const secretKey = process.env.SECRET_KEY;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('User does not exist', HttpStatus.UNAUTHORIZED);
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (comparePassword) {
      throw new Error('Incorrect password', HttpStatus.UNAUTHORIZED);
    }

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
