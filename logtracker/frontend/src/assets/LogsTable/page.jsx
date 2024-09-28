import { columns } from "./columns"
import { DataTable } from "./data-table"
import logsData from "../rawData"
import axios from "axios"
import { getLogsAPI } from "@/services/apis"
import { response } from "express"


export default  function DemoPage() {

  const [logData, setlogData] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(getLogsAPI)
        setlogData(response.data.data)
      } catch (error) {
        console.log("error -> ", error);
        
      }
    })();
  }, [])
  
 

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={logData} />
    </div>
  )
}
