import { Module } from '@nestjs/common';
import { AppControllerAddress } from 'src/controllers/address/app.address.controllers';
import { AppServiceAddress } from 'src/providers/services/address/app.address.service';

import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';

@Module({
  controllers: [AppControllerAddress],
  providers: [AppServiceAddress, PrismaService],
})
export class AddressModule {}
