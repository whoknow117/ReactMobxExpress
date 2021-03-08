const {DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class InfoController {

    async getAll( req, res) {
        const {typeId} = req.body
        const info = await DeviceInfo.findAll({where:{typeId}})
        return res.json(info)
    }

}


module.exports = new InfoController()