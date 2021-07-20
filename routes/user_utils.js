const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'our_little_secret';

const createJWT = (username, password) => {
    const token = jwt.sign({username, password}, JWT_SECRET);

    return token;
}

const verifyJWT = (token) => {
    const decodedToken = jwt.verify(token, JWT_SECRET);

    if (!decodedToken) {
        return null;
    }

    return decodedToken;
}

module.exports = {createJWT, verifyJWT};