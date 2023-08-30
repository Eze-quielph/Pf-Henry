const { ContactMessage } = require("../db"); 

class ContactController {
  constructor() {}

  sendMessage = async (req, res) => {
    try {
      const { name, email, message } = req.body;

      res.status(200).json({ message: "Mensaje enviado exitosamente" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

module.exports = ContactController;
