const {DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class InfoController {

    async getAll( req, res) {

        const info = await DeviceInfo.findAll()
        return res.json(info)
    }

}


module.exports = new InfoController()