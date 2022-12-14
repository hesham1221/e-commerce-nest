import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field()
  username : string

  @Field()
  email : string

  @Field({nullable : true})
  phoneNumber : string

  @Field({nullable : true})
  role : string

  @Field()
  password : string

  @Field()
  firstname : string

  @Field()
  lastname : string
}
