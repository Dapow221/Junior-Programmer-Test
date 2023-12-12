"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let kategori = require("../db/kategori.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Kategoris", kategori);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Kategoris", null, {});
  },
};
