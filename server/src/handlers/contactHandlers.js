const ContactController = require("../controllers/contactController");

const contactController = new ContactController();

class ContactHandlers {
  constructor() {}

  sendMessage = async (req, res) => {
    try {
      await contactController.sendMessage(req, res);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

module.exports = ContactHandlers;
