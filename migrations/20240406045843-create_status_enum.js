'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`CREATE TYPE "enum_status" AS ENUM('todo', 'in-progress', 'done');`);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TYPE "enum_status";`);
  }
};
