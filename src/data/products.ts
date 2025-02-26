import { nanoid } from "nanoid"
import { Product } from "../types/productTypes"

export const products: Product[] = [
  {
    id: nanoid(),
    name: "Camiseta Negra",
    price: 20,
    description: "Camiseta de algodón 100% de color negra",
    image: "/images/products/shirt.webp",
  },
  {
    id: nanoid(),
    name: "Zapatillas Blancas",
    price: 60,
    description: "Zapatillas de deporte de color blanco",
    image: "/images/products/sneakers.webp",
  },
  {
    id: nanoid(),
    name: "Mochila Negra",
    price: 40,
    description: "Mochila de color negra con varios compartimentos",
    image: "/images/products/bag.webp",
  },
]
