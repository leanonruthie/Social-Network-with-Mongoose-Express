// RUT-VIRT-FSF-PT-06-2022-U-LOLC/18-NoSQL/01-Activities/28-Stu_Mini-Project
// * https://stackoverflow.com/questions/27248556/mongodb-difference-between-push-addtoset
// * https://www.mongodb.com/developer/languages/javascript/mongoose-versus-nodejs-driver/

// One user will have many thoughts and both models are specifically used in this controller in line 37, in which, if a user is deleted, then his/her/their thoughts are all deleted as well.

const { User, Thought } = require('../models');

// the exported object below is so convenient with all GET USERS/GET USER BY ID/POST/PUT/DELETE Functionality below

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};