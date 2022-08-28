import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  AllowNull,
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Product } from './product.entity';


@ObjectType()
@Table
export class Category extends Model<Category> {
  @AutoIncrement
  @PrimaryKey
  @Column
  @Field(() => Int)
  id: number;


  @Column
  @Field()
  categoryName : string

  @HasMany(() => Product)
  @Field(() => [Product] , {nullable : true})
  Products?: Product[];
}
