const {DeviceInfoDescription} = require('../models/models')
const ApiError = require('../error/ApiError')



class DeviceInfoDescriptionController  {
    async create (req,res,next) {
        try {
            let {title,deviceInfoId, deviceId} = req.body
            const infoDescription = await DeviceInfoDescription.create({title,deviceInfoId,deviceId})
            return res.json(infoDescription)
        }
        catch (e) {
            ApiError.badRequest(e.message)
        }
    }
    async getAll (deviceId, deviceInfoId) {
        const {data} = await DeviceInfoDescription.findAndCountAll({where: {deviceId,deviceInfoId}})
        return data
    }

}


module.exports = new DeviceInfoDescriptionController()