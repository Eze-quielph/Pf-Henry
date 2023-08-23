const {
  getAllUsers,
  createuser,
  getUserByName,
} = require("../controllers/usersControllers");

//aqui se trea o por nombre o todas la data
const getUsersHandler = async (req, res) => {
  //res.send("estas en el handler de users");
  //console.log(getAllUsers());
  //res.send({ name });
  const { name } = req.query;
  try {
    const resultData = name ? await getUserByName(name) : await getAllUsers();
    res.status(200).json(resultData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postUserHandler = async (req, res) => {
  //res.send("estas en el post de users");
  //console.log(createuser());
  const { username, email, password } = req.body;
  try {
    const newUser = await createuser(username, email, password);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  postUserHandler,
};
