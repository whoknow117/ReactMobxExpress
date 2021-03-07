const Router = require('express')
const deviceInfoController = require('../controllers/deviceInfoController')
const router = new Router()




router.get('/:idInfo',deviceInfoController.getAll)



module.exports = router