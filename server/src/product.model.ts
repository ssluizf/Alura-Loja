/* eslint-disable prettier/prettier */

import { Column, DataType, Model, Table, ForeignKey } from "sequelize-typescript";
import { Category } from "./category.model";

@Table
export class Product extends Model<Product> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false
  })
  title: string;
  
  @Column({
    type: DataType.TEXT("long"),
    allowNull: false
  })
  description: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false
  })
  price: number;

  
  @Column({
    type: DataType.STRING(),
    allowNull: true
  })
  imgUrl: string;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
}
