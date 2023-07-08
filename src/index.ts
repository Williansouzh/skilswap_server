import express from "express"
import MainRouters from "@/routes/mainRoutes"
const server = express()
server.use(MainRouters)
export default server
