import { ObjectType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { User } from './user.entity';

@ObjectType()
export class FeedBack {
  @Field(() => String)
  id: string;

  @Field(() => String)
  comment: string;

  @Field(() => User)
  sender: User;

  @Field()
  receiver: string;

  constructor() {
    this.id = randomUUID();
  }
}
