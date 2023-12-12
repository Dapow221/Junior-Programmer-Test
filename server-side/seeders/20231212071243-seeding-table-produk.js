"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let produk = require("../db/produk.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Produks", produk);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Produks", null, {});
  },
};
