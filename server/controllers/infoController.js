const {DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class InfoController {
    // async getAll(req, res) {
    //     const info = await DeviceInfo.findAll();
    //     return res.json(info)
    // }

    async getAllTypeId(req, res) {
        let {typeId} = req.query
        let info;
        if (!typeId) {
            info = await DeviceInfo.findAll()

        }
        if (typeId) {
             info = await DeviceInfo.findAll({where: {typeId}})


        }
        return res.json(info)
    }


}


module.exports = new InfoController()