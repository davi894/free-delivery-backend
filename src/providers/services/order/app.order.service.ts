import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';

@Injectable()
export class AppServiceOrder {
  constructor(private readonly prisma: PrismaService) {}
  async postOrderSevice() {
    return '';
  }
  async getOrderSevice() {
    return '';
  }
  async patchOrderSevice() {
    return '';
  }
  async deleteOrderSevice() {
    return '';
  }
}
