import { ProductType } from "./productTypes"

export type AlignmentTypes = "left" | "center" | "right"

export type RowTypes = {
  id: string
  products: ProductType[]
  alignment?: AlignmentTypes
}
