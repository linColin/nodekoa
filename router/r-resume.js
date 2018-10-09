var router = require('koa-router')()
let resume = require('../service/s-resume')

router.get('/resume', async (ctx, next) => {
  ctx.body = {
    code: 200,
    msg: 'not found',
    data:{}
  }
  await next()
})

router.get('/resume/:key', async (ctx, next) => {
  // let query = ['name', 'addr', 'phone', 'avatar_url']
  let key = ctx.params.key
  
  await resume(key).then(res => {
    res.education = JSON.parse(res.education)
    res.skill = JSON.parse(res.skill)
    // res.work = JSON.parse(res.work)
    // res.projects = JSON.parse(res.projects)
    res.pro = JSON.parse(res.pro)
    ctx.body = {
      code: 200,
      data: res
    }
  })
  await next()
})

module.exports = router.routes()