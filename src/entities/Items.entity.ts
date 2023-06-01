// order.entity.ts
import { ObjectType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';

@ObjectType()
export class Items {
  @Field()
  id: string;

  @Field()
  item: string;

  constructor() {
    this.id = randomUUID();
  }
}
