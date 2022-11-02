// Challenge Template: 18-NoSQL/01-Activities/28-Stu_Mini-Project
// Mongoose vs MongoDB: https://www.mongodb.com/developer/languages/javascript/mongoose-versus-nodejs-driver/

const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  },
  {
    toJSON: {
    getters: true
    },
    id: false
  }
);

module.exports = reactionSchema;