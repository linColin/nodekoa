const Model = require('./mysql')
const Sequelize = require('sequelize')



async function getMsg(key) {
  let sqlStr = `SELECT a.name, a.age, a.gender, a.mobile, a.email, a.addr, a.hukou, a.avatar_url, b.education, b.pro, b.skill FROM users as a INNER JOIN user_flows as b ON a.id=b.id and a.key = ${key};`
  return await Model.query(sqlStr, { type: Model.QueryTypes.SELECT})
}

module.exports = {
  getMsg
}