const apiRouter = require('express').Router();
const { verifyJWT } = require('../db/user_utils');

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

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

module.exports = apiRouter;
