
const {Device, DeviceInfo ,DeviceInfoDescription   } = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId , categoryId, infoDescription,info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({
                name,
                price,
                brandId,
                typeId,
                categoryId,
                img: fileName,
                infoDescription,
                info


            })
            if (infoDescription) {

                info = JSON.parse(info)
                infoDescription = JSON.parse(infoDescription)

                infoDescription.forEach((i,idx1) =>
                    DeviceInfoDescription.create({
                        key:{idx1},
                        title: i.title,
                        deviceId: device.id,
                        deviceInfoId: (info[idx1].id)


                    })
                )
            }


            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {

        try{
            let {brandId,typeId,categoryId, limit, page} = req.query
            let offset = page * limit - limit
            let devices;

            if (!brandId && !typeId) {
                devices = await Device.findAndCountAll({ limit, offset})
            }

            if (brandId && !typeId & !categoryId) {
                devices = await Device.findAndCountAll({where: {brandId}, limit, offset})

            }
            if (!brandId && typeId && !categoryId) {
                devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
            }
            if (brandId && typeId && !categoryId) {
                devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})
            }
            if (!brandId && !typeId && categoryId) {
                devices = await Device.findAndCountAll({where: {categoryId}, limit, offset})
            }
            if (!brandId && typeId && categoryId) {
                devices = await Device.findAndCountAll({where: {typeId,categoryId}, limit, offset})
            }
            if (brandId && !typeId && categoryId) {
                devices = await Device.findAndCountAll({where: {brandId,categoryId}, limit, offset})
            }
            if (brandId && typeId && categoryId) {
                devices = await Device.findAndCountAll({where: {brandId,typeId,categoryId}, limit, offset})
            }

            // if (!brandId && typeId && !categoryId && color) {
            //     devices = await Device.findAndCountAll({where: { typeId,color}, limit, offset})
            // }
            // if (!brandId && typeId && !categoryId && color) {
            //     devices = await Device.findAndCountAll({where: { typeId,color}, limit, offset})
            // }
            // if (!brandId && typeId && !categoryId && color && power) {
            //     devices = await Device.findAndCountAll({where: { typeId,color,power}, limit, offset})
            // }
            // if (!brandId && typeId && !categoryId && power && !color) {
            //     devices = await Device.findAndCountAll({where: { typeId,power}, limit, offset})
            // }
            // if (!brandId && typeId && !categoryId && productType && !power && !color ) {
            //     devices = await Device.findAndCountAll({where: { typeId,productType}, limit, offset})
            // }
            // if (!brandId && typeId && !categoryId && productType &&  power &&  color ) {
            //     devices = await Device.findAndCountAll({where: { typeId,productType,power,color}, limit, offset})
            // }
            // if (!brandId && typeId && !categoryId && productType  ) {
            //     devices = await Device.findAndCountAll({where: { typeId,productType}, limit, offset})
            // }


            return res.json(devices)
        }
        catch (e) {
            ApiError.badRequest(e.message)
        }
    }

    async getOne(req, res) {

        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfoDescription, as: 'infoDescription'}]
            }
        )
        return res.json(device)
    }
}


module.exports = new DeviceController()