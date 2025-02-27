import { useRowStore } from "../store/rowStore"
import { ProductType } from "../types/productTypes"
import { X } from "lucide-react"
import { Button } from "./ui/button"

type ProductProps = {
  product: ProductType
  rowId: string
}

const ProductCard: React.FC<ProductProps> = ({ product, rowId }) => {
  console.log(`🛠️ Renderizando ProductCard con:`, { rowId, product })
  const { removeProductFromRow } = useRowStore()
  return (
    <div className="border shadow-md p-4 bg-white min-w-[160px] max-w-[300px] rounded-md relative">
      <Button
        className="-top-3 -right-2 absolute hover:bg-red-600 transition-all cursor-pointer"
        onClick={() => removeProductFromRow(rowId, product.id)}
      >
        <X size={24} />
      </Button>
      <img
        className="w-full h-60 object-cover rounded-md"
        src={product.image}
        alt={product.name}
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-md font-semibold mt-2 text-black-600">
        ${product.price.toFixed(2)}
      </p>
    </div>
  )
}

export default ProductCard
