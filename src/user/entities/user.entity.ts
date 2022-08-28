import { ObjectType, Field, Int } from '@nestjs/graphql';
import { AllowNull, AutoIncrement, Column, Default, HasMany, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Product } from '../../product/entities/product.entity';
import { UserAddress } from './user_address.entity';
import { UserPayments } from './user_payments.entity';

@ObjectType()
@Table
export class User extends Model<User> {
  
  @AutoIncrement
  @PrimaryKey
  @Column
  @Field(() => Int)
  id : number

  @Column
  @Field()
  username : string

  @Column
  password : string

  @Column
  @Field()
  firstname : string
  
  @Column
  @Field()
  lastname : string

  @Column
  @Field()
  email : string

  @Default(false)
  @Column
  @Field()
  verifyed : boolean


  @AllowNull
  @Column
  @Field({nullable : true})
  phoneNumber? : string

  @Default('customer')
  @Column
  @Field()
  role : string

  @Field(() => UserAddress)
  @HasOne(() => UserAddress)
  userAddress : UserAddress

  @Field(() => [UserPayments])
  @HasMany(() => UserPayments)
  userPayments : UserPayments[]

  @Field(() => [Product] , {nullable : true})
  @HasMany(() => Product)
  products? : Product[]
}
