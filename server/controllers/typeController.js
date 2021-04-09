const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')

class TypeController {
    async create(req, res) {
        try {

            const {name, categoryId} = req.body

            let {img} = req.files



            let promises = []
            let fileName = '';
            let newArray = []
            img.forEach(file => {
                fileName = uuid.v4() + '.jpg'
                promises.push(file.mv(path.resolve(__dirname, '..', 'static', fileName)))
                newArray.push(fileName)
            })
            await Promise.all(promises)
            console.log(newArray)
            const type = await Type.create({name, categoryId, img: JSON.stringify(newArray),})

            return res.json(type)
        } catch (e) {
            ApiError.badRequest(e.message)
        }


    }

    async getAll(req, res) {

        const types = await Type.findAll()
        return res.json(types)
    }

}


module.exports = new TypeController()