const apiRouter = require('express').Router();

const { getAllUsers, getAllAlcohol, getAlcoholById } = require('../db/index')

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

apiRouter.get("/users", async (req, res, next) => {

  try {
    const user = await getAllUsers()

  res.send({
    user: user
  })
  } catch (error) {
    throw error
  }

})

apiRouter.get("/alcohol", async (req, res, next) => {

  try {
    const alcohol = await getAllAlcohol()

  res.send({
    alcohol : alcohol
  })
  } catch (error) {
    throw error
  }

})

apiRouter.get("/alcohol/:id", async (req, res, next) => {

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



module.exports = apiRouter;
