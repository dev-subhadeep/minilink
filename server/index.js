const express = require("express")
const router = require("./routes/url.routes")
const connection = require("./utils/connection")
const app = express()
const cors = require("cors")
require("dotenv").config()

app.use(cors())
app.use(express.json())
app.use("/", router)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("Connected to DB")
    console.log(`Server running on port ${process.env.PORT}`)
  } catch (error) {
    console.log(error)
  }
})
