const alcoholRouter = require('express').Router();
const {
    createAlcohol,
    getAllAlcohol,
    getAlcoholById } = require("../db/index")

alcoholRouter.get("/", async (req, res, next) => {

    try {
      const alcohol = await getAllAlcohol()

    // Should probably be plural, e.g. "alcohols"
    res.send({
      alcohol : alcohol
    })
    } catch (error) {
      throw error
    }

  })

  alcoholRouter.get("/:id", async (req, res, next) => {

    const { id } = req.params
    try {
      // What if its not found? Also, isnt this alcohol, not "alcoholId"? You are getting by id, not returning an id
      const alcoholId = await getAlcoholById(id)

      res.send({
        alcoholId: alcoholId
      })
    } catch (error) {
      throw error
    }
  })

  module.exports = alcoholRouter
