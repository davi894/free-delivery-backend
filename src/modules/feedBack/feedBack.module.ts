import { Module } from '@nestjs/common';
import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';

@Module({
  controllers: [],
  providers: [PrismaService],
})
export class FeedBackModule {}
