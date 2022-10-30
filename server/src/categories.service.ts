/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./category.model";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category
  ) {}

  async getAll(): Promise<Category[]> {
    return this.categoryModel.findAll();
  }

  async getOne(id: number): Promise<Category> {
    return this.categoryModel.findByPk(id);
  }

  async create(category: Category) {
    this.categoryModel.create(category);
  }
} 