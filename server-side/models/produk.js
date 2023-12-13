"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produk.belongsTo(models.Kategori, {
        foreignKey: "kategori_id",
      });
      Produk.belongsTo(models.Status, {
        foreignKey: "status_id",
      });
    }
  }
  Produk.init(
    {
      nama_produk: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Inputan nama harus diisi",
          },
          notEmpty: {
            msg: "Inputan nama harus diisi",
          },
        },
      },
      harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Harga harus diisi dan harus berupa angka",
          },
          notEmpty: {
            msg: "Harga harus diisi dan harus berupa angka",
          },
        },
      },
      kategori_id: DataTypes.INTEGER,
      status_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Produk",
    }
  );
  return Produk;
};
