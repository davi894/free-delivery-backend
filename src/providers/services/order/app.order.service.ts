import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';

@Injectable()
export class AppServiceOrder {}
