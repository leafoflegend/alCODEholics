const apiRouter = require('express').Router();
const usersRouter = require('./users');

const authMiddleware = (req, res, next) => {
  let authHeader = req.headers.authorization;

  if(authHeader){
    authHeader = authHeader.slice(7);
    try {
      const decodedToken = verifyJWT(authHeader);

      req.user = decodedToken;
    } catch (error) {
      console.log('Invalid JWT')
    }
      
  }


  next();
}

const { getAllUsers, getAllAlcohol } = require('../db/index')

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

apiRouter.use('/users', usersRouter);

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



module.exports = apiRouter;