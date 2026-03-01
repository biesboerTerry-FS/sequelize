'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Stars', 'image', { type: Sequelize.STRING, allowNull: true });
    await queryInterface.addColumn('Galaxies', 'image', { type: Sequelize.STRING, allowNull: true });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Stars', 'image');
    await queryInterface.removeColumn('Galaxies', 'image');
  }
};
