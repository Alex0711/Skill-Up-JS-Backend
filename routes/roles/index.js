const express = require('express');
const router = express.Router();
const ctrlRole = require("../../controllers/role");
const { authenticateUser, checkRole } = require('../../middlewares/authentication.middleware');

router.post("/create", authenticateUser, checkRole([1, 3]), async (req, res) => {
    const { schema } = req.body;
    try {
        let role = await ctrlRole.post(schema);
        res.status(201).send(role);
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router;
