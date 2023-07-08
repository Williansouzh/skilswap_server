import server from "@/index"
import dotenv from "dotenv"
dotenv.config()
server.listen(process.env.PORT, () =>
  console.log("running at port:", process.env.PORT)
)
