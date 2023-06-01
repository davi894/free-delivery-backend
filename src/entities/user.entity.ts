import { ObjectType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { IsEmail } from 'class-validator';
import * as byCrypt from 'bcrypt';
import { FeedBack } from './feedback.entity';
import { Address } from './address.entity';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => Boolean)
  contractor: boolean;

  @Field(() => Boolean)
  courier: boolean;

  @Field(() => [FeedBack], { nullable: true })
  feedback: FeedBack[];

  @Field(() => [Address], { nullable: true })
  address: Address[];

  constructor(
    username: string,
    password: string,
    email: string,
    feedback: FeedBack[],
    courier: boolean,
    contractor: boolean,
    address: Address[],
  ) {
    this.id = randomUUID();
    this.username = username;
    this.email = email;
    this.contractor = contractor;
    this.courier = courier;
    this.feedback = feedback;
    this.address = address;

    if (!this.isPasswordHashed(password)) {
      this.setPassword(password);
    } else {
      this.password = password;
    }
  }

  private isPasswordHashed(password: string): boolean {
    return password.startsWith('$2b$');
  }

  private setPassword(password: string): void {
    const saltRounds = 10;
    this.password = byCrypt.hashSync(password, saltRounds);
  }

  public verifyPassword(password: string): boolean {
    return byCrypt.compareSync(password, this.password);
  }
}
