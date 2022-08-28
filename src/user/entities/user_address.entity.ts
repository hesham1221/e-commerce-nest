import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
    AllowNull,
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from './user.entity';

@ObjectType()
@Table
export class UserAddress extends Model<UserAddress> {
  @AutoIncrement
  @PrimaryKey
  @Column
  @Field(() => Int)
  id: number;

  @ForeignKey(() => User)
  @Column
  userId : number

  @Column
  @Field()
  addressLine1 : string

  @AllowNull
  @Column
  @Field({nullable : true})
  addressLine2? : string

  @Column
  @Field()
  city : string

  @Column
  @Field()
  postcode : string

  @Column
  @Field()
  country : string
}
