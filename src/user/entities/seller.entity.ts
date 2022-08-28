import { Field, Int, ObjectType } from "@nestjs/graphql";
import { AutoIncrement, Column, PrimaryKey, Table } from "sequelize-typescript";

@ObjectType()
@Table
export class Seller {

    @AutoIncrement
    @PrimaryKey
    @Column
    @Field(() => Int)
    id: number;

    @Column
    @Field()
    companyInfo 

}