'use strict';
const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    }
  }, {
    defaultScope: {
      attributes: {
        exclude: [
          "password",
          "createdAt",
          "updatedAt",
        ],
      },
    },
    scopes: {
      currentUser: {
        attributes: {
          exclude: ["password"],
        },
      },
      loginUser: {
        attributes: {},
      },
    },
    sequelize,
    modelName: 'User',
  });

  User.prototype.toSafeObject = function () {
    const { id, username } = this;
    return { id, username };
  };

  User.prototype.validatePassword = function (password) {
    console.log(this);
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.login = async function ({ username, password }) {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: { username: username }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };

  User.signup = async function ({ username, password }) {
    hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({ username, hashedPassword });
    return await User.scope("currentUser").findByPk(user.id);
  };

  return User;
};
