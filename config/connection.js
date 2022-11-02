// * Challenge Template: 18-NoSQL/01-Activities/28-Stu_Mini-Project

const { connect, connection } = require('mongoose');

// with everything working properly, I should be able to see networkDB in my mongoDB

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/networkDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
