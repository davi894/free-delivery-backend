import { Module } from '@nestjs/common';
import { AppControllerItem } from 'src/controllers/items/app.items.controller';
import { AppServiceItems } from 'src/providers/services/items/app.items.service';
import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';

@Module({
  controllers: [AppControllerItem],
  providers: [PrismaService, AppServiceItems],
})
export class ItemsModule {}
