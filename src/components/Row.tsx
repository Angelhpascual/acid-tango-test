import { useState, useEffect } from "react" // ⬅️ Importamos useEffect para depuración
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
import { RowTypes, AlignmentTypes } from "../types/rowTypes"
import { useRowStore } from "../store/rowStore"
import ProductCard from "./PoductCard"

const Row: React.FC<{ row: RowTypes }> = ({ row }) => {
  const { removeRow, addProductToRow, setRowAlignment } = useRowStore()
  const [showWarning, setShowWarning] = useState(false) // Estado para advertencia

  // 🐛 Debug: Verifica el valor actual del alineamiento
  useEffect(() => {
    console.log(`🎯 Alineamiento de la fila (${row.id}):`, row.alignment)
  }, [row.alignment])

  const handleAddProduct = () => {
    console.log("🚀 Intentando agregar producto...") // Debug

    if (!row.alignment) {
      console.warn(
        "⚠️ No hay alineamiento seleccionado. Mostrando advertencia."
      )
      setShowWarning(true) // ⬅️ Si no hay alineamiento, mostramos el diálogo
      return
    }

    console.log("✅ Producto agregado con alineamiento:", row.alignment)
    addProductToRow(row.id)
  }

  return (
    <div
      className="w-full border-3 bg-white h-auto border-black rounded-md mt-6 p-6 flex flex-col items-center relative"
      data-id={row.id}
    >
      {/* 🔴 Diálogo de Confirmación para Eliminar Fila */}
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

      {/* 🔴 Diálogo de Advertencia para Seleccionar Alineamiento */}
      <Dialog open={showWarning} onOpenChange={setShowWarning}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>⚠️ Selecciona un alineamiento</DialogTitle>
            <DialogDescription>
              Debes elegir un alineamiento (Izquierda, Centro o Derecha) antes
              de agregar productos.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end">
            <Button onClick={() => setShowWarning(false)}>Aceptar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 🔲 Contenedor de Productos con Placeholders */}
      <div className="flex justify-around w-full gap-4">
        {Array.from({ length: 3 }).map((_, index) => {
          const product = row.products[index]
          return product ? (
            <ProductCard key={product.id} product={product} rowId={row.id} />
          ) : (
            <div key={index} className="bg-gray-300 h-60 w-60 rounded-2xl" />
          )
        })}
      </div>

      {/* 🔳 Controles de Alineamiento y Agregar Producto */}
      <div className="flex justify-center items-center gap-2 mt-5">
        <Button onClick={handleAddProduct}>Add Product</Button>
        <Select
          onValueChange={(value) => {
            console.log("🆕 Alineamiento cambiado a:", value)
            setRowAlignment(row.id, value as AlignmentTypes)
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Alignment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default Row
