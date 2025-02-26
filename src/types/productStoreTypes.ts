import { ProductType } from "./productTypes"

export type ProductStore = {
  products: ProductType[]
  addProduct: (product: ProductType) => void
}
