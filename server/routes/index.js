const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const categoryRouter = require('./categoryRouter')
const infoRouter = require('./deviceInfoRouter')
const deviceInfoDescriptionRouter = require('./deviceInfoDescriptionRouter')


router.use('/user',userRouter)
router.use('/device',deviceRouter)
router.use('/type',typeRouter)
router.use('/brand',brandRouter)
router.use('/info',infoRouter)
router.use('/infoDescription',deviceInfoDescriptionRouter)
router.use('/category',categoryRouter)




module.exports = router