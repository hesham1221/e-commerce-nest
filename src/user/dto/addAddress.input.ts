import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class addAddressInput {

    @Field()
    addressLine1 : string
  

    @Field({nullable : true})
    addressLine2? : string
  
    @Field()
    city : string
  

    @Field()
    postcode : string

    
    @Field()
    country : string

}