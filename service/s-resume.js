let resume = require('../db/d-resume')

async function getH (key) {
  let a = await resume.getMsg(key)
  return a[0]
}

module.exports = getH