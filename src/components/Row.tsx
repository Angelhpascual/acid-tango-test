import { RowTypes } from "../types/rowTypes"
import { Button } from "./ui/button"
import { X } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { useRowStore } from "../store/rowStore"

const Row: React.FC<{ row: RowTypes }> = ({ row }) => {
  const { removeRow } = useRowStore()

  return (
    <div
      className="w-full border-3 bg-white h-auto border-black rounded-md mt-6 p-6 flex flex-col items-center relative"
      data-id={row.id}
    >
      <Button
        className="absolute -top-4 -right-3 hover:bg-red-600 cursor-pointer transition-all"
        onClick={() => removeRow(row.id)}
      >
        <X size={24} />
      </Button>
      <div className="flex justify-around w-full gap-4">
        {row.products.length > 0 ? (
          row.products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-300 h-60 w-60 rounded-2xl flex items-center justify-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-40 object-contain"
              />
            </div>
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
        <Button>Add Product</Button>
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
