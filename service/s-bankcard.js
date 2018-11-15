let resume = require('../db/d-bankcard')

async function getCardList (key) {
  let a = await resume.getCardList(key)
  return a
}

async function addUser (params) {
  let user = await resume.getUser(params.wx_key)
  let result = ''
  if (!user[0]) {
    await resume.addUser(params).then(res => {
      result = {
        code: 200,
        msg: '添加成功'
      }
    }).catch(err => {
      result = err
    })
  } else {
    result = {
      code: 200,
      msg: '已存在'
    }
  }
  return result
}

module.exports = {
  getCardList,
  addUser
}