import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AutoIncrement, Column, HasMany, PrimaryKey, Table } from 'sequelize-typescript';
import { Seller } from './seller.entity';

@ObjectType()
@Table
export class CompanyInfo {

  @AutoIncrement
  @PrimaryKey
  @Column
  @Field(() => Int)
  id: number;

  @Column
  @Field()
  type : string

    @HasMany(() => Seller)
    @Field(() => [Seller])
    sellers : Seller[]


}
