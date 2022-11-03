// Challenge Template: 18-NoSQL/01-Activities/28-Stu_Mini-Project
//Mongoose vs MongoDB: https://www.mongodb.com/developer/languages/javascript/mongoose-versus-nodejs-driver/

// Amazed at how convenient everything is below

const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// GET THOUGHTS in which POST must be performed here = `localhost:3001/api/thoughts` in Insomnia

router.route('/').get(getThoughts).post(createThought);

// GET THOUGHT BY ID in which PUT and DELETE must be performed here = `localhost:3001/api/thoughts/:thoughtId` in Insomnia

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// GET REACTIONS in which POST must be performed here = `localhost:3001/api/thoughts/:thoughtId/reactions` in Insomnia

router.route('/:thoughtId/reactions').post(addReaction);

// GET REACTION BY ID in which DELETE must be performed here = `localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId` in Insomnia

router.route('/:thoughtId/reactions/:reactionId').post(removeReaction);

module.exports = router;