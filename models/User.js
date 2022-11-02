// Challenge Template: 18-NoSQL/01-Activities/28-Stu_Mini-Project
// Virtuals: 18-NoSQL/01-Activities/21-Ins_Virtuals
// Mongoose vs MongoDB: https://www.mongodb.com/developer/languages/javascript/mongoose-versus-nodejs-driver/
// Email Address Validation: https://www.w3docs.com/snippets/javascript/how-to-validate-an-e-mail-using-javascript.html

const { Schema, model } = require('mongoose');

// below function found in aforementioned website in "Email Address Validation" and modified to live const

// function validateEmail(email) {
//   let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return res.test(email);
// }

const validateEmail = (email) => {
  const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return res.test(email);
};

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please kindly provide a valid email addy'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please kindly provide a valid email addy']
    },

    thoughts: {
      _id: Schema.Types.ObjectId,
      ref: 'thought'
    },
    friends: {
      _id: Schema.Types.ObjectId,
      ref: 'user'
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// below code modified from code found in 18-NoSQL/01-Activities/21-Ins_Virtuals

// Create a virtual property `friendCount` that gets the amount of friends per user
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;