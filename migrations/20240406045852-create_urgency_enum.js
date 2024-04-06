'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`CREATE TYPE "enum_urgency" AS ENUM('low', 'medium', 'high');`);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TYPE "enum_urgency";`)
  }
};
