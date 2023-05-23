const express = require('express');
const registerRouter = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models');

registerRouter.post('/', async (req, res, next) => {
    const { name, lastname, email, password } = req.body;

    if (!name || !lastname || !email || !password)
        res.send('failure')
    
    const result = await User.findOne({ where: { email: email }});
    if (result === null) {
        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(password, salt);
        const curUser = await User.create({ name: name, lastname: lastname, email: email, password: hashedPassword });
        res.status(201).send(curUser);
    } else {
        res.send('failure');
    }
});

module.exports = registerRouter;