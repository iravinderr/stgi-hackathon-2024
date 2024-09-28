import { columns } from "./columns"
import { DataTable } from "./data-table"
import logsData from "../rawData"


export default  function DemoPage() {

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={logsData} />
    </div>
  )
}
