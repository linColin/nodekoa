var router = require('koa-router')()
let bankcard = require('../service/s-bankcard')

router.get('/bankcard', async (ctx, next) => {
  ctx.body = {
    code: 200,
    msg: 'not found',
    data:{}
  }
  await next()
})

router.get('/bankcard/:key', async (ctx, next) => {
  let key = ctx.params.key
  
  await bankcard.getCardList(key).then(res => {
    ctx.body = {
      code: 200,
      data: res
    }
  })
  await next()
})

router.post('/bankcard', async (ctx, next) => {
  let body = ctx.request.body
  await bankcard.addUser(body).then(res => {
    console.log(res);
    
    ctx.body = {
      code: 200,
      data: 11
    }
  })
  await next()
})

module.exports = router.routes()