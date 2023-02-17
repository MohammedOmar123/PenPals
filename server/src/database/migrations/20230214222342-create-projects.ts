'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Projects', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },

      year: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(), // or Sequelize.literal('CURRENT_TIMESTAMP')
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('Projects', {
      cascade: true,
    });
  },
};
