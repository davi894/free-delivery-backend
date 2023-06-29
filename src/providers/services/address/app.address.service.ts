import { Injectable } from '@nestjs/common';
import { Prisma, Address } from '@prisma/client';

import { PrismaService } from '../prisma/app.prisma.service';

@Injectable()
export class AppServiceAddress {
  constructor(private readonly prisma: PrismaService) {}

  async postAddressService(data: Prisma.AddressCreateInput): Promise<Address> {
    return this.prisma.address.create({ data });
  }

  async getAddressService(userId: string): Promise<Address[] | null> {
    return this.prisma.address.findMany({ where: { userId } });
  }

  async patchAddressService(
    id: string,
    data: Prisma.AddressUpdateInput,
  ): Promise<Address | null> {
    return this.prisma.address.update({ where: { id }, data });
  }

  async deleteAddressService(id: string): Promise<Address | null> {
    return this.prisma.address.delete({ where: { id } });
  }
}
