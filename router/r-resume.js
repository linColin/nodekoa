var router = require('koa-router')()
let resume = require('../service/s-resume')

router.get('/resume', async (ctx, next) => {
  // let query = ['name', 'addr', 'phone', 'avatar_url']
  
  await resume().then(res => {
    ctx.body = {
      code: 200,
      data: res
    }
  })
  await next()
})

module.exports = router.routes()