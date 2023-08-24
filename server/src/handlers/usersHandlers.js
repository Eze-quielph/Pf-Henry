const {
  getAllUsers,
  createuser,
  getUserByName,
  getUserById,
  deleteMydata,
} = require("../controllers/usersControllers");

class UserHandler {
  constructor() {}

  getUsers = async (req, res) => {
    const { username } = req.query;

    try {
      const data = username
        ? await getUserByName(username)
        : await getAllUsers();

      res.status(200).json({ result: data });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getuserById = async (req, res) => {
    const { id } = req.params;

    try {
      const data = await getUserById(id);
      res.status(200).json({ result: data });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  postUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const newUser = await createuser(name, email, password);
      res.status(200).json({ data: newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  updateUser = async (req, res) => {
    res.send("estas en actualziar del handler");
  };

  deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
      const deteData = await deleteMydata(id);
      res.status(200).json({ deteData: deteData });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

module.exports = UserHandler;
