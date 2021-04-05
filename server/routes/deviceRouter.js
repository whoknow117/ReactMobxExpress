const Router = require('express')
const deviceController = require('../controllers/deviceController')
const router = new Router()


router.post('/',deviceController.create)
router.put('/',deviceController.updateOne)
router.get('/',deviceController.getAll)
router.get('/:id',deviceController.getOne)
router.delete('/',deviceController.deleteOne)





module.exports = router