import { ObjectType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { IsEmail } from 'class-validator';
import * as byCrypt from 'bcrypt';
import { FeedBack } from './feedback.entity';

enum UserRole {
  CONTRACTOR = 'contractor',
  COURIER = 'courier',
}

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

  @Field(() => UserRole)
  role: UserRole;

  @Field(() => [FeedBack], { nullable: true })
  feedback: FeedBack[];

  constructor(
    username: string,
    password: string,
    email: string,
    role: UserRole,
  ) {
    this.id = randomUUID();
    this.username = username;
    this.email = email;
    this.role = role;

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
