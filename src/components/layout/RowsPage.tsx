import { useRowStore } from "../../store/rowStore"
import Row from "../Row"
import { Button } from "../ui/button"

const RowsPage: React.FC = () => {
  const { rows, addRow } = useRowStore()
  return (
    <div className="w-full bg-slate-300 max-w-5xl mx-auto mt-6 py-6 px-4 rounded-2xl">
      <Button onClick={addRow}>Add Row ({rows.length})</Button>
      <div className="space-y-6">
        {rows.map((row) => (
          <Row key={row.id} row={row} />
        ))}
      </div>
    </div>
  )
}

export default RowsPage
