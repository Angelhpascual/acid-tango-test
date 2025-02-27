import { RowTypes } from "./rowTypes"

export type RowStoreTypes = {
  rows: RowTypes[]
  addRow: () => void
  removeRow: (id: string) => void
}
