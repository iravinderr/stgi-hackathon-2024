import { columns } from "./columns"
import { DataTable } from "./data-table"
import logsData from "../rawData"
import axios from "axios"
import { getLogsAPI } from "@/services/apis"


export default  function DemoPage() {

  const getLogsHandler = async () => {
    try {
      const response = await axios.get(getLogsAPI)
    } catch (error) {
      
    }
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={logsData} />
    </div>
  )
}
