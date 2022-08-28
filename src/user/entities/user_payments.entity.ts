import { Field, Int, ObjectType } from "@nestjs/graphql";
import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.entity";


@ObjectType()
@Table
export class UserPayments extends Model<UserPayments>{

    @AutoIncrement
    @PrimaryKey
    @Column
    @Field(() => Int)
    id : number

    @ForeignKey(() => User)
    @Column
    userId : number


    @Field()
    @Column
    paymentType : string

    @Field()
    @Column
    povider : string

    @Field(() => Int)
    @Column
    accountNumber : number

    @Field(() => Date)
    @Column
    expiry : Date


}