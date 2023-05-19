const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// let msg = 'Codecamp14'
// let hashMsg = bcrypt.hashSync(msg)
// console.log(hashMsg)

// let checkMsg = bcrypt.compareSync('Codecamp14', '$2a$10$bY6nf1vuxKH9bqAB0xKUkOyWjMUoJ8vMYn90zjkXmSx9jdE1MFa2C')
// console.log(checkMsg)

let payload = {id: 3, name:'Andy'}

let token = jwt.sign(payload, 'Codecamp14', { expiresIn : '7d'})

console.log(token)

let token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkJvYmJ5IiwiaWF0IjoxNjg0NDcxNDc1LCJleHAiOjE2ODUwNzYyNzV9.Hh1erSgDWwvV_r0gyNRnWkGQgZ221WRbCxhZHaPV7mQ'
let token3 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkJvYmJ5IiwiaWF0IjoxNjg0NDcxNDc1LCJleHAiOjE2ODUwNzYyNzV9.xKT1eMaADeX0WB6D0LRXoW5w5AbeR9QvQ_1cRATlCJQ'
let token4 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNhbmR5IiwiaWF0IjoxNjg0NDcxNDc1LCJleHAiOjE2ODUwNzYyNzV9.zbRTQlsZ7CE60idyLJo7czleLO0a7OqdbYzFLPZxpKo'

let checkToken = jwt.verify(token4, 'Codecamp14')
console.log(checkToken)
