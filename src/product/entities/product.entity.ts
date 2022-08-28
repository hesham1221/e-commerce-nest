import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  AllowNull,
  AutoIncrement,
  Column,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from '../../user/entities/user.entity';
import { Category } from './category.entity';
import { Discount } from './discount.entity';

@ObjectType()
@Table
export class Product extends Model<Product> {
  @PrimaryKey
  @AutoIncrement
  @Column
  @Field(() => Int)
  id: number;

  @Column
  @Field()
  name: string;

  @Column
  @Field()
  desc: string;

  @Column
  @Field(() => Int)
  price: number;

  @Default(0)
  @Column
  @Field(() => Int)
  quantity: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @AllowNull
  @ForeignKey(() => Discount)
  @Column
  discountId: number;

  
  @ForeignKey(() => User)
  @Column
  creatorId:number
}
