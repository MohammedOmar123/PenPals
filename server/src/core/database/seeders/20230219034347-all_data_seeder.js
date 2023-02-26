/* eslint-disable @typescript-eslint/no-var-requires */
const {
  generateUsers,
  generateProjects,
  generatePosts,
  generateViews,
  generateUsersProject,
  generateFeedback,
  generateComments,
} = require('../factory/data.factory');

const insertData = async (queryInterface) => {
  const transaction = await queryInterface.sequelize.transaction();
  try {
    const users = generateUsers(20);
    const projects = generateProjects(20);
    const posts = generatePosts(10);
    const views = generateViews(10);
    const usersProject = generateUsersProject(10);
    const feedbacks = generateFeedback(10);
    const comments = generateComments(10);

    await queryInterface.bulkInsert(
      'Users',
      [
        ...users,
        {
          firstName: 'Mohammed',
          lastName: 'Omar',
          email: 'mohammed@gmail.com',
          password:
            '$2a$10$uIHNhqCpliQWk8iAwucBNePhduBZNqu/euVYAFE1mjFvgoXYFdymu', //123456
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'saif',
          lastName: 'hayek',
          email: 'saif@gmail.com',
          password:
            '$2a$10$uIHNhqCpliQWk8iAwucBNePhduBZNqu/euVYAFE1mjFvgoXYFdymu',
          role: 'student',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { transaction },
    );
    await queryInterface.bulkInsert('Projects', projects, { transaction });
    await queryInterface.bulkInsert('Posts', posts, { transaction });
    await queryInterface.bulkInsert('Views', views, { transaction });
    await queryInterface.bulkInsert('UserProject', usersProject, {
      transaction,
    });
    await queryInterface.bulkInsert('Feedbacks', feedbacks, { transaction });
    await queryInterface.bulkInsert('Comments', comments, { transaction });

    await transaction.commit();
  } catch (error) {
    console.log(error);
    await transaction.rollback();
  }
};

const deleteData = async (queryInterface) => {
  const transaction = await queryInterface.sequelize.transaction();
  try {
    await queryInterface.bulkDelete('Users', null, { transaction });
    await queryInterface.bulkDelete('Projects', null, { transaction });
    await queryInterface.bulkDelete('Posts', null, { transaction });

    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await insertData(queryInterface);
  },

  async down(queryInterface, Sequelize) {
    await deleteData(queryInterface);
  },
};
