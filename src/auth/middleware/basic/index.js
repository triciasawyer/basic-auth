'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { userModel } = require('../../models');


module.exports = async (req, res, next) => {

  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');

  try{
    const user = await userModel.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if(valid) {
      req.user = user;
      next();
      res.status(200).json(user);
    }
    else {
      throw new Error('Invalid User');
    }
  } catch(err) {
    res.status(403).send('Invalid Login');
  }
};
