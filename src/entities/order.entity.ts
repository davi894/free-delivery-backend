// order.entity.ts
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from './user.entity';
import { randomUUID } from 'crypto';
import { Items } from './Items.entity';
import { Address } from './address.entity';

@ObjectType()
export class Order {
  @Field()
  id: string;

  @Field(() => User)
  contractor: User;

  @Field(() => User)
  courier: User;

  @Field()
  items: Items[];

  @Field()
  address: Address;

  constructor() {
    this.id = randomUUID();
  }
}
