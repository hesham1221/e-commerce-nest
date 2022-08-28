import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { loginInput } from './dto/login.input';
import * as jwt from 'jsonwebtoken'
import { ProductService } from '../product/product.service';
import { CreateProductInput } from '../product/dto/create-product.input';
import { addAddressInput } from './dto/addAddress.input';
import { UserAddress } from './entities/user_address.entity';
@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel : typeof User , private productService : ProductService , @InjectModel(UserAddress) private userAddress : typeof UserAddress){}

  async create(createUserInput: CreateUserInput) {
    const {password , ...others} = createUserInput
    const ecriptedPassword = await bcrypt.hash(password , 10)
    return await this.userModel.create({...others , password : ecriptedPassword}) 
  }

  async login(loginInput : loginInput){
    try {
      const user  = await this.userModel.findOne({where : {email : loginInput.email}})
  
      if(!user){
        return new NotFoundException
      }
  
      const password = user.password
      
      const comparedPass = await bcrypt.compare(loginInput.password , password)
      if(!comparedPass){
        return new UnauthorizedException
      }
      return{
        message : 'login successfully',
        token : jwt.sign({role : user.role , id : user.id} , process.env.SECRET , {expiresIn : '5m'})
      }     
    } catch (error) {
      return new Error(error)
    }


  }

 async update(updateUserInput: UpdateUserInput , contex) {

    const {oldPassword , ...others} = updateUserInput

    try {
      const {password :correctPassword , ...othersInfo} = await this.userModel.findOne({where : {id :contex.user.id}})

      if(await bcrypt.compare(oldPassword , correctPassword)){
        await this.userModel.update({...others} , {where : {id :contex.user.id}})
        return await this.userModel.findOne({where : {id : contex.user.id}})
      }
      throw new UnauthorizedException
    } catch (error) {
      throw new Error(error)
    }

  }

 async remove(oldPassword : string , contex) {
    try {
      const {password :correctPassword , ...others} = await this.userModel.findOne({where : {id : contex.user.id}})
      if (await bcrypt.compare(oldPassword , correctPassword)){
        await this.userModel.destroy({where : {id : contex.user.id}})
        return {
          message : 'successfully deleted'
        }
      }
    } catch (error) {
      throw new Error(error)
    }
  }


  async createAProduct(createProductInput : CreateProductInput , contex){

    if(contex.user.role === 'seller'){
      return await this.productService.create(createProductInput , contex.user.id)
    }else{
      throw new UnauthorizedException('you have to be a seller to add a product')
    }

  }

  async addAddresses(addAddress : addAddressInput , context){
    return await this.userAddress.create({...addAddress ,userId : context.user.id})
  }

}
