import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput{
  @Field({nullable : true})
  username : string

  @Field({nullable : true})
  password : string

  @Field()
  oldPassword :string

  @Field({nullable : true})
  firstname : string
  
  @Field({nullable : true})
  lastname : string

  @Field({nullable : true})
  email : string

  @Field({nullable : true})
  phoneNumber? : string

  @Field({nullable : true})
  role : string
}
