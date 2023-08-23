const axios = require("axios");
const { user } = require("../db");

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
  const databaseUser = await user.findAll({ where: { name: name } });
  //const filterApi = userData.filter((users) => users.name === name);

  return databaseUser;
};

const createuser = async (username, email, password) => {
  // console.log("estas en el post de user");
  return await user.create({ username, email, password });
};

module.exports = {
  getAllUsers,
  createuser,
  getUserByName,
};
