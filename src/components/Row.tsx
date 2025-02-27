import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { X } from "lucide-react"
import { RowTypes } from "../types/rowTypes"
import { useRowStore } from "../store/rowStore"
import ProductCard from "./PoductCard"

const Row: React.FC<{ row: RowTypes }> = ({ row }) => {
  const { removeRow, addProductToRow } = useRowStore()

  return (
    <div
      className="w-full border-3 bg-white h-auto border-black rounded-md mt-6 p-6 flex flex-col items-center relative"
      data-id={row.id}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button className="absolute -top-4 -right-3 hover:bg-red-600 cursor-pointer transition-all">
            <X size={24} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>¿Eliminar fila?</DialogTitle>
            <DialogDescription>
              Esta acción no se puede deshacer. ¿Estás seguro?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-2">
            <Button variant="outline" asChild>
              <DialogTrigger>Cancelar</DialogTrigger>
            </Button>
            <Button variant="destructive" onClick={() => removeRow(row.id)}>
              Sí, eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex justify-around w-full gap-4">
        {row.products.length > 0 ? (
          row.products.map((product) => (
            <ProductCard key={product.id} product={product} rowId={row.id} />
          ))
        ) : (
          <>
            <div className="bg-gray-300 h-60 w-60 rounded-2xl" />
            <div className="bg-gray-300 h-60 w-60 rounded-2xl" />
            <div className="bg-gray-300 h-60 w-60 rounded-2xl" />
          </>
        )}
      </div>
      <div className="flex justify-center items-center gap-2 mt-5">
        <Button onClick={() => addProductToRow(row.id)}>Add Product</Button>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Alignment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
            <SelectItem value="left">Left</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default Row
