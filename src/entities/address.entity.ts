import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Field(() => String)
  street: string;

  @Field(() => String)
  number: string;

  @Field(() => String, { nullable: true })
  complement?: string;

  @Field(() => String)
  neighborhood: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  postalCode: string;

  @Field(() => String)
  country: string;
}
