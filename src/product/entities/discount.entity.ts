import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { DECIMAL } from "sequelize";
import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Product } from "./product.entity";


@Table
@ObjectType()
export class Discount extends Model<Discount>{
    @PrimaryKey
    @AutoIncrement
    @Column
    @Field(() => Int)
    id:number

    @Column
    @Field()
    name : string

    @Column
    @Field()
    desc : string

    @Column
    @Field(() => Float)
    discountPrecent : number


    @Column
    @Field()
    active : boolean


    @Column
    @Field()
    deletedAt : Date

    @HasMany(() => Product)
    @Field(() => [Product])
    products : Product[]
}