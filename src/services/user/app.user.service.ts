import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'prisma/services/app.prisma.service';

@Injectable()
export class AppServiceUser {
  constructor(private readonly prisma: PrismaService) {}

  async postUserService(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async getUserService(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async patchUserService(
    id: string,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUserService(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
