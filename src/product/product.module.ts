import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { Product } from './entities/product.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './entities/category.entity';
import { Discount } from './entities/discount.entity';
import { UserModule } from '../user/user.module';

@Module({
  providers: [ProductResolver, ProductService],
  imports: [
    SequelizeModule.forFeature([Product]),
    SequelizeModule.forFeature([Category]),
    SequelizeModule.forFeature([Discount]),
  ],
  exports: [ProductService],
})
export class ProductModule {}
