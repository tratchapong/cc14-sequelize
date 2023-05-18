const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {User} = require('../models')

exports.register = (req, res, next) => {
  const {username, password} = req.body

  bcrypt.hash(password, 10).then (hashed => {
    return User.create({
      name: username,
      password: hashed,
    })
  }).then( rs => {
    res.status(201).json({msg: `user: '${rs.name}' have been created`})
  }).catch(next)
}

exports.login = (req,res,next) => {
  const {username, password} = req.body
  User.findOne({ where: {name: username}}).then( user => {
    if(!user) 
      throw new Error('Cannot Login')
    return user
  }).then( user => {
    // return {pw_ok: bcrypt.compare(password, user.password), user: user}
    return Promise.all([ bcrypt.compare(password, user.password), Promise.resolve(user)])
  }).then( ([pw_ok, user]) => {
    if(!pw_ok)
      throw new Error('Cannot Login')
    const payload = {
      id: user.id,
      name: user.name
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '30d'})
    res.json( {token: token})
  }).catch(next)
}