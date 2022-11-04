// Challenge Template: 18-NoSQL/01-Activities/28-Stu_Mini-Project
//Mongoose vs MongoDB: https://www.mongodb.com/developer/languages/javascript/mongoose-versus-nodejs-driver/

// Amazed at how convenient everything is below

const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// GET USERS in which POST must be performed here = `localhost:3001/api/users` in Insomnia

router.route('/').get(getUsers).post(createUser);

// GET USER BY ID in which PUT and DELETE must be performed here = `localhost:3001/api/users/:userId` in Insomnia

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// GET FRIENDS in which POST and DELETE must be performed here = `localhost:3001/api/users/:userId/friends/:friendId` in Insomnia

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;

