const { user } = require("../db");
const { Op } = require("sequelize");

// const cleanArray = (arr) =>
//   arr.map((el) => {
//     return {
//       username: el.username,
//       email: el.email,
//       password: el.password,
//     };
//   });

const getAllUsers = async () => {
  //console.log("estas en el controller de users");
  const useDataBase = await user.findAll();
  //console.log(useDataBase);
  //*** queda de forma opsional si no desea que se muetre el ID de la DB */
  //const clearData = cleanArray(useDataBase);
  //console.log([...clearData]);
  return useDataBase;
};

const getUserByName = async (name) => {
  //console.Console("user");
  //const filterApi = userData.filter((users) => users.name === name);
  //const databaseUser = await user.findAll({ where: { name } });
  const databaseUser = await user.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
  console.log(databaseUser);

  return databaseUser;
};

const getUserById = async (id) => {
  // const userId =
  //   source === "api"
  //     ? (await axios.get(`https://users/${id}`))
  //         .data
  //     : await user.findByPk(id);

  const userId = await user.findByPk(id);
  return userId;
};

const createuser = async (name, email, password) => {
  // console.log("estas en el post de user");
  return await user.create({ name, email, password });
};

const deleteMydata = async (id) => {
  const deleteUser = await user.findByPk(id);

  const respuesDelete = await deleteUser.destroy();

  return respuesDelete;
};

module.exports = {
  getAllUsers,
  createuser,
  getUserByName,
  getUserById,
  deleteMydata,
};
