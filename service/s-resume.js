let resume = require('../db/d-resume')

async function getH (key) {
  let a = await resume.getMsg(key)
  return a
}

module.exports = getH