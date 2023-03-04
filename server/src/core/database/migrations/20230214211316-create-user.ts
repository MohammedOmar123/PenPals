'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },

      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },

      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      role: {
        type: Sequelize.ENUM('admin', 'student', 'user'),
        allowNull: false,
      },

      verifyToken: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      isConfirmed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    return queryInterface.dropTable('Users', {
      cascade: true,
    });
  },
};
