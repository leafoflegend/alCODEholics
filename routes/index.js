const apiRouter = require('express').Router();

const { getAllUsers } = require('../db/index')

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

module.exports = apiRouter;
