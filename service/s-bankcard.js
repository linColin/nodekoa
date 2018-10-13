let resume = require('../db/d-bankcard')

async function getCardList (key) {
  let a = await resume.getCardList(key)
  return a
}

async function addUser (key) {
  let a = await resume.addUser(key)
  return a
}

module.exports = {
  getCardList,
  addUser
}