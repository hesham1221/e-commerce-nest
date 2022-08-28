import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";

@ObjectType()
export class updateOutput {
    @Field()
    message : string

    @Field()
    user : User
}