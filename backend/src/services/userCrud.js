const { User } = require('../models/users')

const findUsersByUserName = async () => {
  const users = await User.find({})
  return users
}

const saveUser = async (req, res) => {
  const dataUser = new User({
    username: req.body.username,
    password: req.body.password,
    active: true,
  })
  const save = await dataUser.save();
  return res.status(201).json({ user: save });
};

module.exports = {
  findUsersByUserName,
  saveUser
}
