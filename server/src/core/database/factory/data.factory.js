// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker');

const generateUsers = (num) => {
  const users = [];
  for (let i = 0; i < num; i++) {
    const user = {
      firstName: faker.internet.userName(),
      lastName: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
      isConfirmed: true,
      verifyToken: 'something',
    };
    users.push(user);
  }
  return users;
};

const generateProjects = (num) => {
  const projects = [];
  for (let i = 0; i < num; i++) {
    const project = {
      year: faker.date.recent().getFullYear(),
      name: faker.internet.userName(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    projects.push(project);
  }
  return projects;
};

const generatePosts = (num) => {
  const posts = [];
  for (let i = 0; i < num; i++) {
    const post = {
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraph(20),
      review: [faker.lorem.paragraph(3)],
      projectId: i + 1,
      userId: i + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    posts.push(post);
  }
  return posts;
};

const generateViews = (num) => {
  const views = [];
  for (let i = 0; i < num; i++) {
    const view = {
      postId: i + 1,
      userId: i + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    views.push(view);
  }
  return views;
};

const generateUsersProject = (num) => {
  const usersProject = [];
  for (let i = 0; i < num; i++) {
    const view = {
      projectId: i + 1,
      userId: i + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    usersProject.push(view);
  }
  return usersProject;
};

const generateFeedback = (num) => {
  const feedbacks = [];
  for (let i = 0; i < num; i++) {
    const feedback = {
      content: faker.lorem.sentence(2),
      userId: i + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    feedbacks.push(feedback);
  }
  return feedbacks;
};

const generateComments = (num) => {
  const comments = [];
  for (let i = 0; i < num; i++) {
    const comment = {
      content: faker.lorem.sentence(2),
      userId: i + 1,
      postId: i + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    comments.push(comment);
  }
  return comments;
};

const generateNotifications = (num) => {
  const notifications = [];
  const types = ['write', 'update'];
  const booleanValue = [false, true];
  for (let i = 0; i < num; i++) {
    Math.floor(Math.random() * 2) + 1;
    const notification = {
      type: types[Math.round(Math.random())], //
      seen: booleanValue[Math.round(Math.random())],
      userId: i + 1,
      postId: i + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    notifications.push(notification);
  }
  return notifications;
};

module.exports = {
  generateUsers,
  generateProjects,
  generatePosts,
  generateViews,
  generateUsersProject,
  generateFeedback,
  generateComments,
  generateNotifications,
};
