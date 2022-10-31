/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Query, Post } from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getProducts(@Query() query: { filter: string; categoryId: number }) {
    if (query.categoryId) {
      return this.productsService.getByCategory(query.categoryId);
    } else if (query.filter) {
      return this.productsService.getByFilter(query.filter);
    } else {
      return this.productsService.getAll();
    }
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Product> {
    return this.productsService.getOne(id);
  }

  @Post()
  async populate(@Body() products: Product[]) {
    products.forEach((product) => {
      this.productsService.create(product);
    });
  }
}
