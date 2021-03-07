const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const deviceInfoRouter = require('./deiviceInfoRouter')

router.use('/user',userRouter)
router.use('/device',deviceRouter)
router.use('/type',typeRouter)
router.use('/info',deviceInfoRouter)
router.use('/brand',brandRouter)




module.exports = router