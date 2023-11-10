const Url = require("../models/url.model")
const { nanoid } = require("nanoid")

const createUrl = async (req, res) => {
  try {
    const original = req.body.link
    const { duration } = req.body
    const currentDate = new Date()
    const expireByTime = new Date(
      currentDate.getTime() + duration * 24 * 60 * 60 * 1000
    )
    const expireBy = expireByTime.toISOString()
    const shortened = nanoid(5)
    const shortened_link = await Url.create({ original, shortened, expireBy })
    res.status(200).send({ message: "Success", link: shortened_link })
    // res.send({ link: req.body.link })
  } catch (error) {
    res.status(500).send({ message: `${error}` })
  }
}

module.exports = createUrl
