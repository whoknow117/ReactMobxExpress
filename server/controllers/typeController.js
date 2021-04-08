const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')

class TypeController {
    async create( req, res) {

           const {name, categoryId} = req.body

           let {img} = req.files

           let fileName = uuid.v4() + '.jpg'
           await  img.mv(path.resolve(__dirname, '..','static',fileName))

           const type = await Type.create({name, categoryId, img: fileName,})
           return res.json(type)




    }
    async getAll( req, res) {

        const types = await Type.findAll()
        return res.json(types)
    }

}


module.exports = new TypeController()