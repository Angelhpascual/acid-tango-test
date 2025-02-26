import { create } from "zustand"
import { RowStoreTypes } from "../types/rowStoreTypes"
import { useProductStore } from "./productStore"
import { nanoid } from "nanoid"

export const useRowStore = create<RowStoreTypes>((set) => ({
  rows: [],
  addRow: () =>
    set((state) => ({ rows: [...state.rows, { id: nanoid(), products: [] }] })),
  addProductToRow: (rowId) => {
    const { products } = useProductStore.getState()
    if (products.length === 0) return

    const randomProduct = products[Math.floor(Math.random() * products.length)]
    set((state) => ({
      rows: state.rows.map((row) =>
        row.id === rowId
          ? { ...row, products: [...row.products, randomProduct] }
          : row
      ),
    }))
  },
}))
