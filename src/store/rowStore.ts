import { create } from "zustand"
import { RowStoreTypes } from "../types/rowStoreTypes"
import { nanoid } from "nanoid"

export const useRowStore = create<RowStoreTypes>((set) => ({
  rows: [],
  addRow: () =>
    set((state) => ({ rows: [...state.rows, { id: nanoid(), products: [] }] })),
}))
