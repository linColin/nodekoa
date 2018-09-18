const Model = require('./mysql')
const Sequelize = require('sequelize')



async function getMsg(key) {
  let sqlStr = `SELECT * FROM users INNER JOIN user_flows ON users.id=user_flows.id and users.key = ${key};`
  return await Model.query(sqlStr, { type: Model.QueryTypes.SELECT})
}

module.exports = {
  getMsg
}