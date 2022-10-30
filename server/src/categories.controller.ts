/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Category } from './category.model';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async getAll(): Promise<Category[]> {
    return this.categoriesService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Category> {
    return this.categoriesService.getOne(params.id);
  }

  @Post()
  async populate(@Body() categories: Category[]) {
    categories.forEach((category) => {
      this.categoriesService.create(category);
    });
  }
}
