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
  addProductToRow: (rowId: string) => {
    set((state) => {
      const { products } = useProductStore.getState()
      if (products.length === 0) return state // ✅ Si no hay productos, no hace nada.

      const randomProduct =
        products[Math.floor(Math.random() * products.length)]
      if (!randomProduct) return state // ✅ Si por alguna razón no encuentra un producto, no hace nada.

      return {
        rows: state.rows.map((row) => {
          if (row.id !== rowId) return row // ✅ Solo modificamos la fila correcta.

          if (row.products.length >= 3) return row // ✅ Límite de 3 productos por fila.

          // Determinar en qué posición agregar el producto según la alineación.
          let newProducts = [...row.products]

          if (row.alignment === "center") {
            newProducts = [
              newProducts[0] || null, // Posición 1
              randomProduct, // Posición 2 (Centro)
              newProducts[1] || newProducts[2] || null, // Posición 3 si ya había elementos
            ]
          } else if (row.alignment === "left") {
            newProducts = [
              randomProduct, // Posición 1 (Izquierda)
              newProducts[0] || null,
              newProducts[1] || null,
            ]
          } else if (row.alignment === "right") {
            newProducts = [
              newProducts[0] || null,
              newProducts[1] || null,
              randomProduct, // Posición 3 (Derecha)
            ]
          }

          return {
            ...row,
            products: newProducts.filter((p) => p !== null), // ✅ Eliminamos los `null` sobrantes.
          }
        }),
      }
    })
  },
  removeProductFromRow: (rowId, productId) => {
    console.log(`🗑️ Eliminando producto ${productId} de la fila ${rowId}`) // Debugging

    set((state) => ({
      rows: state.rows.map((row) =>
        row.id === rowId
          ? { ...row, products: row.products.filter((p) => p.id !== productId) }
          : row
      ),
    }))
  },
  setRowAlignment: (rowId, alignment) => {
    set((state) => ({
      rows: state.rows.map((row) =>
        row.id === rowId ? { ...row, alignment } : row
      ),
    }))
  },
}))
