const Model = require('./mysql')
const Sequelize = require('sequelize')



async function getMsg(query) {
  let sqlStr = `SELECT * FROM users LEFT JOIN user_flows ON users.id=user_flows.id;`
  return await Model.query(sqlStr, { type: Model.QueryTypes.SELECT})
}

module.exports = {
  getMsg
}