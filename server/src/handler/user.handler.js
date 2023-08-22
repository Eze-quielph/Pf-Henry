const { getAllUsers } = require("../controller/userController");

//aqui se trea o por nombre o todas la data
const userHandler = async (req, res) => {
  res.send("estas en el handler user");
  // const { name } = req.query;
  // const resultData = await getAllUsers();
  // res.status(200).json(resultData);
};

const handleruserPost = async (req, res) => {
  res.send("estas en el post de user");
  // const { name, email, phone } = req.body;

  // try {
  //   const newUser = await createuser(name, email, phone);
  // } catch (error) {}
};

module.exports = {
  userHandler,
  handleruserPost,
};
