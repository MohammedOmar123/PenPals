// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker');

const generateUsers = (num: number) => {
  const users: any = [];
  for (let i = 0; i < num; i++) {
    const user = {
      firstName: faker.internet.userName(),
      lastName: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    users.push(user);
  }
  return users;
};

const generateProjects = (num: number) => {
  const projects: any = [];
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

const generatePosts = (num: number) => {
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

const generateViews = (num: number) => {
  const views: any = [];
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

const generateUsersProject = (num: number) => {
  const usersProject: any = [];
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

const generateFeedback = (num: number) => {
  const feedbacks: any = [];
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

const generateComments = (num: number) => {
  const comments: any = [];
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

module.exports = {
  generateUsers,
  generateProjects,
  generatePosts,
  generateViews,
  generateUsersProject,
  generateFeedback,
  generateComments,
};
