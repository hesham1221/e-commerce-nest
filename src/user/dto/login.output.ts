import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class loginOutput {
    @Field()
    message : string

    @Field()
    token : string
}