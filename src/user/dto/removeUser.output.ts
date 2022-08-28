import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class removeUser{
    @Field()
    message : string
}