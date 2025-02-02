const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

let Comment = db.define("Comment", {
  body: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.STRING },
});

module.exports = Comment;
