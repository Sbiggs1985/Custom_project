const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection'); // Import the connection

// Define the User model
const User = sequelize.define('User', {
  spotifyUserId: { type: DataTypes.STRING, unique: true, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: true },
  accessToken: { type: DataTypes.TEXT, allowNull: false },
  refreshToken: { type: DataTypes.TEXT, allowNull: false },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = User;
