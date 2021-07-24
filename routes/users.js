const usersRouter = require('express').Router();

const {
    getAllUsers,
    getUserById,
    registerUser,
    loginUser
} = require('../db/index');

const { createJWT } = require('./user_utils');

usersRouter.get('/', async (req, res, next) => {
    // You are sending users hashed passwords down to clients using this 😬
    const users = await getAllUsers();

    res.send(users);
})

usersRouter.get('/:userId', async (req, res, next) => {
    const { userId } = req.params;
    // What if theres no user by this id?
    const user = await getUserById(userId);

    res.send(user);
})

usersRouter.post('/register', async (req, res, next) => {

    const { username, password } = req.body;
    const user = await registerUser({username, password});


    if (!user) {
        res.status(401).send({message: "User could not be registered."});
    } else {
        const token = createJWT(user.username, user.id);

        res.send({
            message: "Registration Successful.",
            user: {
                id: user.id,
                username: user.username
            },
            token
        })
    }
})

usersRouter.post('/login', async (req, res, next) => {
    const { username, password } = req.body;
    const user = await loginUser(username, password);

    if (!user) {
        res.status(401).send({message: "User not found."});
    } else {
        const token = createJWT(user.username, user.id);

        res.send({
            message: "Login Successful.",
            user: {
                id: user.id,
                username: user.username
            },
            token
        })
    }
})

usersRouter.get('/whoami', (req, res, next) => {
    if (req.user) {
        res.send({user: req.user})
    } else {
        res.status(401).send({message: 'You are not a registered user or authenticated user.'})
    }
})

module.exports = usersRouter;
