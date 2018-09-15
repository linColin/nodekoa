let resume = require('../db/d-resume')

async function getH (query) {
  let a = await resume.getMsg(query)
  return a
}

module.exports = getH