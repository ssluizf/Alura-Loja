import product1 from "../assets/product-01.png"
import product2 from "../assets/product-02.jpg"
import product3 from "../assets/product-03.jpg"
import product4 from "../assets/product-04.png"
import product5 from "../assets/product-05.png"
import product6 from "../assets/product-06.jpg"
import product7 from "../assets/product-07.jpg"
import product8 from "../assets/product-08.jpg"
import product9 from "../assets/product-09.jpg"
import product10 from "../assets/product-10.jpg"
import product11 from "../assets/product-11.jpg"
import product12 from "../assets/product-12.jpg"
import product13 from "../assets/product-13.jpg"
import product14 from "../assets/product-14.jpg"
import product15 from "../assets/product-15.jpg"
import product16 from "../assets/product-16.jpg"
import product17 from "../assets/product-17.jpg"
import product18 from "../assets/product-18.jpg"

export interface ProductType {
  id: string,
  title: string,
  description: string,
  price: number,
  imgUrl?: string,
  categoryId: number
}

const products: ProductType[] = [
  {
    id: "0000001",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 1
  },
  {
    id: "0000002",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 1
  },
  {
    id: "0000003",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 1
  },
  {
    id: "0000004",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 1
  },
  {
    id: "0000005",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 1
  },
  {
    id: "0000006",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 1
  },
  {
    id: "0000007",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 2
  },
  {
    id: "0000008",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 2
  },
  {
    id: "0000009",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 2
  },
  {
    id: "0000010",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 2
  },
  {
    id: "0000011",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 2
  },
  {
    id: "0000012",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 2
  },
  {
    id: "0000013",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 3
  },
  {
    id: "0000014",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 3
  },
  {
    id: "0000015",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 3
  },
  {
    id: "0000016",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 3
  },
  {
    id: "0000017",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 3
  },
  {
    id: "0000018",
    title: "Produto XYZ",
    description: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
    price: 60,
    categoryId: 3
  },
]

export default products;