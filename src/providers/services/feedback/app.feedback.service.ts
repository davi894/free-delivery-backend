import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';

@Injectable()
export class AppServiceFeedback {
  constructor(private readonly prisma: PrismaService) {}
  async postFeedbackSevice() {
    return '';
  }
  async getFeedbackSevice() {
    return '';
  }
  async patchFeedbackSevice() {
    return '';
  }
  async deleteFeedbackSevice() {
    return '';
  }
}
