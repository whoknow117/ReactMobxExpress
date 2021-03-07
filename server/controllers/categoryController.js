const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')


class CategoryController {
    async create( req, res) {
        const {name} = req.body
        const category = await Brand.create({name})
        return res.json(category)

    }
    async getAll( req, res) {
        const category = await Brand.findAll()
        return res.json(category)
    }

}


module.exports = new CategoryController()