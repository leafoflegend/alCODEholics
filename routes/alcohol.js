const alcoholRouter = require('express').Router();
const {
    createAlcohol,
    getAllAlcohol,
    getAlcoholById } = require("../db/index")

alcoholRouter.get("/alcohol", async (req, res, next) => {

    try {
      const alcohol = await getAllAlcohol()

    res.send({
      alcohol : alcohol
    })
    } catch (error) {
      throw error
    }

  })

  alcoholRouter.get("/alcohol/:id", async (req, res, next) => {

    const { id } = req.params
    try {
      const alcoholId = await getAlcoholById(id)

      res.send({
        alcoholId: alcoholId
      })
    } catch (error) {
      throw error
    }
  })

  module.exports = alcoholRouter
