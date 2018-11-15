const Model = require('./mysql')
const Sequelize = require('sequelize')

// 查询用户的所有卡片
async function getCardList(key) {
  let sqlStr = `SELECT b.id, b.card_name, b.card_key, b.card_num, b.deadline FROM card as b, (SELECT id FROM users WHERE id = ${key}) as a WHERE a.id = b.user_id;`
  return await Model.query(sqlStr, { type: Model.QueryTypes.SELECT})
}

var User = Model.define('users', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER(3),
  gender: Sequelize.STRING(2),
  mobile: Sequelize.STRING(12),
  email: Sequelize.STRING(50),
  addr: Sequelize.STRING(50),
  hukou: Sequelize.STRING(10),
  avatar_url: Sequelize.STRING(255),
  resume_key: Sequelize.STRING(100),
  wx_key: Sequelize.STRING(100)
});

// 添加用户
async function addUser(params) {
  let a = User.create({
      name: params.name,
      wx_key: params.wx_key
  })
  return a
}
// 查询用户
async function getUser(wxKey) {
  let a = User.findAll({
    where:{
      'wx_key': wxKey
    }
  })
  return a
}

module.exports = {
  getCardList,
  addUser,
  getUser
}