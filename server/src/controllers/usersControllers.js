const { User } = require("../db");
const { Op } = require("sequelize");

class UserController {
  constructor() {}
  // const cleanArray = (arr) =>
  //   arr.map((el) => {
  //     return {
  //       username: el.username,
  //       email: el.email,
  //       password: el.password,
  //     };
  //   });

  getUsers = async () => {
    //console.log("estas en el controller de users");
    const useDataBase = await User.findAll();
    //console.log(useDataBase);
    //*** queda de forma opsional si no desea que se muestre el ID de la DB */
    //const clearData = cleanArray(useDataBase);
    //console.log([...clearData]);
    return useDataBase;
  };

  getUserByName = async (username) => {
    //console.Console({ username });
    //const filterApi = userData.filter((users) => users.name === name);
    //const databaseUser = await user.findAll({ where: { name } });

    const databaseUser = await User.findAll({
      where: { username: { [Op.iLike]: `%${username}%` } },
    });

    //console.log(databaseUser);

    return databaseUser;
  };

  getUserById = async (id) => {
    // const userId =
    //   source === "api"
    //     ? (await axios.get(`https://users/${id}`))
    //         .data
    //     : await user.findByPk(id);

    const userId = await User.findByPk(id);
    return userId;
  };

  postUser = async (username, email, password) => {
    // console.log("estas en el post de user");
    return await User.create({ username, email, password });
  };

  deleteUser = async (id) => {
    const deleteUser = await User.findByPk(id);

    const respuesDelete = await deleteUser.destroy();

    return respuesDelete;
  };
}

module.exports = UserController;
