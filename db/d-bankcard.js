const Model = require('./mysql')
const Sequelize = require('sequelize')

// 查询用户的所有卡片
async function getCardList(key) {
  let sqlStr = `SELECT b.id, b.card_name, b.card_key, b.card_num, b.deadline FROM card as b, (SELECT id FROM users WHERE id = ${key}) as a WHERE a.id = b.user_id;`
  return await Model.query(sqlStr, { type: Model.QueryTypes.SELECT})
}

// 添加用户
async function addUser(params) {
  console.log('12323', params)
  // let sqlStr = `INSERT INTO users SET name = ${params.name}, wx_key=${params.wx_key}`
  // return await Model.query(sqlStr, { type: Model.QueryTypes.SELECT})
}
// 
module.exports = {
  getCardList,
  addUser
}