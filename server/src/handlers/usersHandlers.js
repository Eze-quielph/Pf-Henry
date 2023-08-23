const {
  getAllUsers,
  createuser,
  getUserByName,
  getUserById,
  deleteMydata,
} = require("../controllers/usersControllers");
const { user } = require("../db");

//aqui se trea o por nombre o todas la data
const getUsersHandler = async (req, res) => {
  //res.send("estas en el handler de users");
  //console.log(getAllUsers());

  const { name } = req.query;
  //res.send({ name });
  try {
    const resultData = name ? await getUserByName(name) : await getAllUsers();
    res.status(200).json(resultData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getuserByIdHandler = async (req, res) => {
  //res.send("estas en el hanlder de id");
  const { id } = req.params;
  //const source = isNaN(id) ? "bdd" : "api";
  try {
    //const userId = await createGetUserId(id)
    // const user = await getUserById(id, source);
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postUserHandler = async (req, res) => {
  //res.send("estas en el post de users");
  //console.log(createuser());
  const { name, email, password } = req.body;
  try {
    const newUser = await createuser(name, email, password);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const actualizarUser = async (req, res) => {
  //res.send("estas en actualziar del handler");
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    //const updateuser = await updateuser(id, name, email, password);
    let userId = await user.findByPk(id);
    if (!userId) {
      res.status(400).json({ message: `Id incorrecto` });
    }
    // userId = { ...userId, name, email, password };
    await userId.update({ ...userId, name, email, password });
    res.status(200).json(userId);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "No se recibieron parametros necesarios" });
  }
};

const deleteUserData = async (req, res) => {
  //res.send("estas en el delete de handler");
  const { id } = req.params;
  try {
    const deteData = await deleteMydata(id);
    res.status(200).json({
      msg: "Eliminacion de usuario aprobado ",
      deteData: deteData,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  postUserHandler,
  getuserByIdHandler,
  deleteUserData,
  actualizarUser,
};
