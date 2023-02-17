'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Posts', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      isApproved: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: null,
      },

      review: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true,
      },

      seen: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

      projectId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Projects',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

      userId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    return await queryInterface.dropTable('Posts');
  },
};
