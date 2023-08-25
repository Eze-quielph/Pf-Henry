const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "playlist",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
      }
    },
    { timestamps: false, freezeTableName: true }
  );
};
