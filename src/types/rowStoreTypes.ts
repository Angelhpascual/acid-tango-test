import { RowTypes } from "./rowTypes"
import { AlignmentTypes } from "./rowTypes"

export type RowStoreTypes = {
  rows: RowTypes[]
  addRow: () => void
  removeRow: (id: string) => void
  addProductToRow: (rowId: string) => void
  removeProductFromRow: (rowId: string, productId: string) => void
  setRowAlignment: (rowId: string, alignment: AlignmentTypes) => void
}
