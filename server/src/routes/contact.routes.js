const express = require("express");
const router = express.Router();
const ContactController = require("../handlers/contactController");
const contactController = new ContactController();

router.post("/", contactController.sendMessage);

module.exports = router;
