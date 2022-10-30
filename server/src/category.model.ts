/* eslint-disable prettier/prettier */

import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Category extends Model<Category> {      
  @Column({
    type: DataType.STRING(60),
    allowNull: false
  })
  title: string;
}
