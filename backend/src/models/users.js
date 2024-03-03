const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username:  {
      type: String,
      required: true
    },
    password:  {
      type: String,
      required: true
    },
    active: Boolean,
  },
  { collection: 'user'}
)

const User = mongoose.model('user', UserSchema);

module.exports = {
  User
};
