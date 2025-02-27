import { Button } from "./ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const Row: React.FC = () => {
  return (
    <div className="w-full border-3 bg-white h-auto border-black rounded-md mt-6 p-6 flex flex-col items-center">
      <div className="flex justify-around w-full gap-4">
        <div className="bg-gray-300 h-60 w-60 rounded-2xl" />
        <div className="bg-gray-300 h-60 w-60 rounded-2xl" />
        <div className="bg-gray-300 h-60 w-60 rounded-2xl" />
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button>＋ Add Product</Button>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Alignment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Center</SelectItem>
            <SelectItem value="dark">Left</SelectItem>
            <SelectItem value="system">Right</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default Row
