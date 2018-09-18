const Router = require('koa-router')
const resume = require('./r-resume')
const user = require('./user')

let router = new Router()

router.use('/admin/v1', resume)
router.use('/user', user)

module.exports = router.routes()
