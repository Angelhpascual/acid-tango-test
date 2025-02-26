import { RowTypes } from "./rowTypes"

export type RowStoreTypes = {
  rows: RowTypes[]
  addRow: () => void
  addProductToRow: (rowId: string) => void
}
