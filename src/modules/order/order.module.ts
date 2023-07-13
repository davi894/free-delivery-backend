import { Module } from '@nestjs/common';
import { AppControllerOrder } from 'src/controllers/order/app.order.controller';
import { AppServiceOrder } from 'src/providers/services/order/app.order.service';
import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';

@Module({
  controllers: [AppControllerOrder],
  providers: [PrismaService, AppServiceOrder],
})
export class OrderModule {}
