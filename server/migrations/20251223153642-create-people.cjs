'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('people', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
      },

      phone: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('people');
  },
};
