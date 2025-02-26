import { Product } from "../types/product"

type ProductProps = {
  product: Product
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="border shadow-md p-4 bg-white">
      <img
        className="w-full h-40 object-cover rounded-md"
        src={product.image}
        alt={product.name}
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-md font-semibold mt-2 text-red-600">
        ${product.price.toFixed(2)}
      </p>
    </div>
  )
}

export default ProductCard
