const Router = require('express');
const router = new Router;
const deviceInfoDescriptionController = require('../controllers/deviceInfoDescriptionController')




router.post('/',deviceInfoDescriptionController.create)
router.get('/',deviceInfoDescriptionController.getAllTypeId)



module.exports = router