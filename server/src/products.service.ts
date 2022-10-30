/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async getByCategoryGroup(categoryId: number): Promise<Product[]> {
    return this.productModel.findAll({
      where: {
        categoryId
      }
    });
  }

  async getOne(id: number): Promise<Product> {
    return this.productModel.findByPk(id);
  }

  async create(product: Product) {
    this.productModel.create(product);
  }
} 