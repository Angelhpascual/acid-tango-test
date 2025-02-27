import { create } from "zustand"
import { RowStoreTypes } from "../types/rowStoreTypes"
import { nanoid } from "nanoid"
import { useProductStore } from "./productStore"

export const useRowStore = create<RowStoreTypes>((set) => ({
  rows: [],
  addRow: () =>
    set((state) => ({ rows: [...state.rows, { id: nanoid(), products: [] }] })),
  removeRow: (id: string) =>
    set((state) => ({ rows: state.rows.filter((row) => row.id !== id) })),
  addProductToRow: (rowId) => {
    const { products } = useProductStore.getState()
    if (products.length === 0) return

    set((state) => ({
      rows: state.rows.map((row) => {
        if (row.id !== rowId) return row

        if (row.products.length >= 3) return row

        const randomProduct =
          products[Math.floor(Math.random() * products.length)]

        return {
          ...row,
          products: [...row.products, { ...randomProduct, id: nanoid() }],
        }
      }),
    }))
  },
}))
