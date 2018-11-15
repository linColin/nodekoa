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

router.post('/bankcard/user', async (ctx, next) => {
  let body = ctx.request.body
})

router.post('/bankcard/user', async (ctx, next) => {
  let body = ctx.request.body
  if (!body.name) {
    ctx.body = {
      code: 200,
      msg: '缺少用户名'
    }
    return  false
  }
  if (!body.wx_key && !body.resume_key) {
    ctx.body = {
      code: 200,
      msg: '缺少key'
    }
    return  false
  }

  await bankcard.addUser(body).then(res => {
    ctx.body = res
  })
  await next()
})

module.exports = router.routes()