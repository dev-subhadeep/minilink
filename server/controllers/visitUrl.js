const Url = require("../models/url.model")

const visitUrl = async (req, res) => {
  try {
    const shortened = req.params.id
    const currentDate = new Date()
    const link = await Url.findOne({ shortened })
    if (link) {
      if (link.expireBy > currentDate) {
        res.redirect(link.original)
      } else {
        res.status(404).send({ message: "Link expired" })
      }
    } else {
      res.status(400).send({ message: "Link not found." })
    }
  } catch (error) {
    res.status(500).send({ message: `${error}` })
  }
}
module.exports = visitUrl
