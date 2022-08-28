import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product) private productModel : typeof Product , @InjectModel(Category) private CategoryModel : typeof Category ){}

async create(createProductInput: CreateProductInput , userId : number) {
    const newProduct = await this.productModel.create({...createProductInput , creatorId : userId})

    return newProduct

  }

 async createCategory(categoryName : string) {
  return await this.CategoryModel.create({categoryName})
 }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
