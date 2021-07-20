const apiRouter = require('express').Router();
const usersRouter = require('./users');
const alcoholRouter = require("./alcohol")

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

apiRouter.use('/users', usersRouter);

apiRouter.use('/alcohol', alcoholRouter);

module.exports = apiRouter;
