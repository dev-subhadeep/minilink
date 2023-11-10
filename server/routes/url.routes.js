const express = require("express")
const createUrl = require("../controllers/createUrl")
const visitUrl = require("../controllers/visitUrl")
const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).send("Homepage.")
})

router.get("/:id", visitUrl)

router.post("/create/quick", createUrl)

module.exports = router
