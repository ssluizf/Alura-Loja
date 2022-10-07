import product1 from "../assets/product-01.png"
import product2 from "../assets/product-02.png"
import product3 from "../assets/product-03.png"
import product4 from "../assets/product-04.png"
import product5 from "../assets/product-05.png"
import product6 from "../assets/product-06.png"
import product7 from "../assets/product-07.png"
import product8 from "../assets/product-08.png"
import product9 from "../assets/product-09.png"
import product10 from "../assets/product-10.png"
import product11 from "../assets/product-11.png"
import product12 from "../assets/product-12.png"
import product13 from "../assets/product-13.png"
import product14 from "../assets/product-14.png"
import product15 from "../assets/product-15.png"
import product16 from "../assets/product-16.png"
import product17 from "../assets/product-17.png"
import product18 from "../assets/product-18.png"

interface ProductType {
  id: number,
  title: string,
  price: number,
  imgUrl: string,
  categoryId: number
}

const products: ProductType[] = [
  {
    id: 1,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product1,
    categoryId: 1
  },
  {
    id: 2,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product2,
    categoryId: 1
  },
  {
    id: 3,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product3,
    categoryId: 1
  },
  {
    id: 4,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product4,
    categoryId: 1
  },
  {
    id: 5,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product5,
    categoryId: 1
  },
  {
    id: 6,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product6,
    categoryId: 1
  },
  {
    id: 7,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product7,
    categoryId: 2
  },
  {
    id: 8,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product8,
    categoryId: 2
  },
  {
    id: 9,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product9,
    categoryId: 2
  },
  {
    id: 10,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product10,
    categoryId: 2
  },
  {
    id: 11,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product11,
    categoryId: 2
  },
  {
    id: 12,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product12,
    categoryId: 2
  },
  {
    id: 13,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product13,
    categoryId: 3
  },
  {
    id: 14,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product14,
    categoryId: 3
  },
  {
    id: 15,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product15,
    categoryId: 3
  },
  {
    id: 16,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product16,
    categoryId: 3
  },
  {
    id: 17,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product17,
    categoryId: 3
  },
  {
    id: 18,
    title: "Produto XYZ",
    price: 60,
    imgUrl: product18,
    categoryId: 3
  },
]

export default products;