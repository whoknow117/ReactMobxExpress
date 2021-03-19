const {DeviceInfoDescription} = require('../models/models')
const ApiError = require('../error/ApiError')

class InfoDescriptionController {
    async getAll (req, res, next) {
        try {
            let infoDescription = await DeviceInfoDescription.findAll()
            return res.json(infoDescription)
        }
        catch (e){
           return ApiError.badRequest(e.message)
        }
    }
}

module.exports = new InfoDescriptionController()