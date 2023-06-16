import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import bcrypt from 'bcrypt';

import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';

@Injectable()
export class AppServiceUser {
  constructor(private readonly prisma: PrismaService) {}

  async postUserService(reqBody: Prisma.UserCreateInput): Promise<User> {
    const { password, ...user } = reqBody;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return this.prisma.user.create({
      data: { ...user, password: hashedPassword },
    });
  }

  async getUserService(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async patchUserService(
    id: string,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    if (data.password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(
        data.password as string,
        saltRounds,
      );
      data.password = { set: hashedPassword };
    }
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUserService(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
