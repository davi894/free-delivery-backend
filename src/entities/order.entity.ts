// order.entity.ts
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from './user.entity';
import { randomUUID } from 'crypto';

@ObjectType()
export class Order {
  @Field()
  id: string;

  @Field(() => User)
  contractor: User;

  @Field(() => User)
  courier: User;

  @Field()
  items: any[];

  constructor() {
    this.id = randomUUID();
  }
}
