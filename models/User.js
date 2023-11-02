const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

let User = db.define("User", {
  usename: {
    type: DataTypes.STRING
  },
  email : {
    type: DataTypes.STRING
  }
});


module.exports = User;