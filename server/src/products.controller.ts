/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Product> {
    return this.productsService.getOne(params.id);
  }

  @Get(':category')
  async getByCategoryGroup(@Param() params): Promise<Product[]> {
    return this.productsService.getByCategoryGroup(params.category);
  }

  @Post()
  async populate(@Body() products: Product[]) {
    products.forEach((product) => {
      this.productsService.create(product);
    });
  }
}
