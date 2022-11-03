// Challenge Template: 18-NoSQL/01-Activities/28-Stu_Mini-Project
// Virtuals: 18-NoSQL/01-Activities/21-Ins_Virtuals
// Mongoose vs MongoDB: https://www.mongodb.com/developer/languages/javascript/mongoose-versus-nodejs-driver/

// will getters and virtuals work fine here?

const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
    getters: true,
    virtuals: true
    },
    id: false
  }
);

// below code modified from code found in 18-NoSQL/01-Activities/21-Ins_Virtuals

// Create a virtual property `friendCount` that gets the amount of friends per user
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});
const Thought = model('thought', thoughtSchema);

module.exports = Thought;