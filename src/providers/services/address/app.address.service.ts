import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/app.prisma.service';

@Injectable()
export class AppServiceAddress {
  constructor(private readonly prisma: PrismaService) {}
}
