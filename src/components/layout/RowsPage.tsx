import Row from "../Row"
import { Button } from "../ui/button"

const RowsPage: React.FC = () => {
  return (
    <div className="w-full bg-slate-300 max-w-5xl mx-auto mt-6 py-6 px-4 rounded-2xl">
      <Button>Add Row</Button>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  )
}

export default RowsPage
