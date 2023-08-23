const { getAllUsers } = require("../controllers/usersControllers");

//aqui se trea o por nombre o todas la data
const getUsersHandler = async (req, res) => {
  res.send("estas en el handler de users");
  // const { name } = req.query;
  // const resultData = await getAllUsers();
  // res.status(200).json(resultData);
};

const postUserHandler = async (req, res) => {
  res.send("estas en el post de users");
  // const { name, email, phone } = req.body;
  // try {
  //   const newUser = await createuser(name, email, phone);
  // } catch (error) {}
};

module.exports = {
  getUsersHandler,
  postUserHandler,
};
