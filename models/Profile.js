const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

let Profile = db.define("Profile", {
  bio: {
    type: DataTypes.STRING
  },
  profilePicture: {
    type: DataTypes.STRING
  },
  birthday: {
    type: DataTypes.STRING
  }
});


module.exports = Profile;