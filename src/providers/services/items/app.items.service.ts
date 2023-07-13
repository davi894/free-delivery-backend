import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';

@Injectable()
export class AppServiceItems {
  constructor(private readonly prisma: PrismaService) {}

  async postItemsSevice() {
    return '';
  }
  async getItemsSevice() {
    return '';
  }
  async patchItemsSevice() {
    return '';
  }
  async deleteItemsSevice() {
    return '';
  }
}
