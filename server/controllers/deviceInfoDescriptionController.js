const {DeviceInfoDescription} = require('../models/models')
const ApiError = require('../error/ApiError')



class DeviceInfoDescriptionController  {
    async create (req,res,next) {
        try {
            let {title, deviceId,infoId} = req.body
            const infoDescription = await DeviceInfoDescription.create({title,deviceId,infoId})
            return res.json(infoDescription)
        }
        catch (e) {
            ApiError.badRequest(e.message)
        }
    }
    async getAll (deviceId, infoId) {
        const {data} = await DeviceInfoDescription.findAndCountAll({where: {deviceId,infoId}})
        return data
    }

}
