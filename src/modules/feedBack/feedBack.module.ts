import { Module } from '@nestjs/common';
import { AppControllerFeedback } from 'src/controllers/feedback/app.feedback.controller';
import { AppServiceFeedback } from 'src/providers/services/feedback/app.feedback.service';
import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';

@Module({
  controllers: [AppControllerFeedback],
  providers: [PrismaService, AppServiceFeedback],
})
export class FeedBackModule {}
