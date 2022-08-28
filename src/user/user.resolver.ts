import { Resolver, Mutation, Args, Int, Query, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { loginInput } from './dto/login.input';
import { loginOutput } from './dto/login.output';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../jwt.auth.guard';
import { removeUser } from './dto/removeUser.output';
import { Product } from '../product/entities/product.entity';
import { CreateProductInput } from '../product/dto/create-product.input';
import { UserAddress } from './entities/user_address.entity';
import { addAddressInput } from './dto/addAddress.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => loginOutput, { name: 'login' })
  login(@Args('loginInput')loginInput : loginInput) {
    return this.userService.login(loginInput);
  }


  @Mutation(() => User)
  @UseGuards(new AuthGuard)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput , @Context() context) {
    return this.userService.update(updateUserInput , context);
  }

  @Mutation(() => removeUser)
  @UseGuards(new AuthGuard)
  removeUser(@Args('oldPassword') oldPassword: string , @Context() context) {
    return this.userService.remove(oldPassword,context);
  }

  @Mutation(() => Product)
  @UseGuards(new AuthGuard)
  addProduct(@Args('createProductInput')createProductInput : CreateProductInput , @Context() context){
    return this.userService.createAProduct(createProductInput , context)
  }

  @Mutation(() => UserAddress)
  @UseGuards(new AuthGuard)
  addAddress(@Args('UserAddressInput')userAddressInput : addAddressInput , @Context()context){
    return this.userService.addAddresses(userAddressInput , context)
  }

}
