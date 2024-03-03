const { findUsersByUserName, saveUser } = require('../services/userCrud')

const getUser = async (req, res) => {
  try {
    const result =  await findUsersByUserName()
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ response: error });
  }
};

const  postUser = async (req, res) => {
  try {
    if (req.body.username && req.body.password) {
      await saveUser(req, res);
    } else {
      return res.status(404).json({ response: " The username and password is required "})
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ response: error})
  }
};

module.exports = {
  getUser,
  postUser
}
