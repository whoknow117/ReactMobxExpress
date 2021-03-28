const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Device, DeviceInfo ,DeviceInfoDescription   } = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price,aliasName, brandId,quantity,availableId,article, typeId ,unitId, categoryId, infoDescription,info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({
                name,
                price,
                aliasName,
                article,
                availableId,
                quantity,
                brandId,
                typeId,
                unitId,
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
                        typeId: typeId,
                        deviceInfoId: (info[idx1].id)

                    })
                )
            }


            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateOne(req,res,next) {
        try {
            let {id,name,price,aliasName,article,quantity,availableId} = req.body



            let updatedProduct = await Device.update({name,price,aliasName,article,quantity,availableId},{
                returning: true,where:{id}});




            return res.json(updatedProduct)

        }
        catch  (e) {
            ApiError.badRequest(e.message)
        }
    }


    async getAll(req, res, next) {

        try{
            let {brandId,typeId,categoryId,honey,name, limit, page} = req.query

            let offset = page * limit - limit
            let devices;



            if(honey) {
                honey = JSON.parse(honey)
            }

            if (!name && !categoryId && !brandId && !typeId && !honey) {
                devices = await Device.findAndCountAll(

                    {limit,offset})
            }

            if (name && !brandId && !typeId && !honey) {

                // models.sequelize.query(
                //     "SELECT * FROM tableName WHERE CONCAT(field1, '', field2, '', field3, '', field4 ) LIKE \"%" + keyword + "%\"",
                //     {type: models.sequelize.QueryTypes.SELECT}).then(res => {
                //
                // })

                devices = await Device.findAndCountAll({where: {
                    aliasName: {[Op.like]: "%" + name + "%"}
                    },limit,offset})
            }
            if (!categoryId && !brandId &&  typeId && honey) {
                devices = await Device.findAndCountAll({where: {
                    typeId,
                        id: {
                        [Op.or] : honey
                        },

                    },

                        limit,offset}
                    )

            }

            if (brandId && !typeId & !categoryId && !honey ) {
                devices = await Device.findAndCountAll({where: {brandId},

                    limit, offset})

            }
            if (!brandId && typeId && !categoryId && !honey ) {
                devices = await Device.findAndCountAll({where: {typeId},
                    // include:[{model: DeviceInfoDescription,raw: true}],
                    limit, offset})
            }
            if (brandId && typeId && !categoryId && !honey ) {
                devices = await Device.findAndCountAll({where: {brandId, typeId},
                    // include:[{model: DeviceInfoDescription,raw: true}],
                    limit, offset})
            }
            if (!brandId && !typeId && categoryId && !honey ) {
                devices = await Device.findAndCountAll({where: {categoryId},

                    limit, offset})
            }
            if (!brandId && typeId && categoryId && !honey ) {
                devices = await Device.findAndCountAll({where: {typeId,categoryId},

                    limit, offset})
            }
            if (brandId && !typeId && categoryId && !honey ) {
                devices = await Device.findAndCountAll({where: {brandId,categoryId},

                    limit, offset})
            }
            if (brandId && typeId && categoryId && !honey ) {
                devices = await Device.findAndCountAll({where: {brandId,typeId,categoryId},
                      // include:[{model: DeviceInfoDescription,raw: true}],
                    limit, offset})
            }




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

            }
        )
        return res.json(device)
    }





    async deleteOne(req,res) {

        const {id} = req.query
        const device = await Device.destroy({where:{id:id,

            },


        },)

        // await DeviceInfoDescription.destroy({where:{deviceId: id}})
        return res.json(device)
    }
}


module.exports = new DeviceController()