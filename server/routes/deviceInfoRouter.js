const Router = require('express')
const infoController = require('../controllers/infoController')
const router = new Router()



// router.get('/',infoController.getAll)
router.get('/',infoController.getAllTypeId)



module.exports = router