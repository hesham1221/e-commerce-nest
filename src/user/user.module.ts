import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User } from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserPayments } from './entities/user_payments.entity';
import { UserAddress } from './entities/user_address.entity';
import { ProductModule } from '../product/product.module';

@Module({
  providers: [UserResolver, UserService],
  imports: [
    SequelizeModule.forFeature([User]),
    SequelizeModule.forFeature([UserPayments]),
    SequelizeModule.forFeature([UserAddress]),
    ProductModule
  ],
  exports: [],
})
export class UserModule {}
