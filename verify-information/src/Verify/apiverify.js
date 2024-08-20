const express = require('express');
const router = express.Router();
const fetch = (...args) =>
import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { User } = require('../models');


router.get('/:mail', async (req, res) => {
    const { mail } = req.params;
    try {
        const response = await fetch(`http://localhost:4003/apiencrypt/${mail}/password`);
        if (response.ok) {
            const data = await response.json();
            const email = data.mail;

            const userExists = await User.count({ where: { mail: email } });

            if (userExists > 0) {
                res.status(404).json('E-mail already exists');
            } else {
                res.status(200).json('ok');
            }
        } else {
            console.log(error);
            res.status(500).json({ error: "Error fetching encrypted data" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
