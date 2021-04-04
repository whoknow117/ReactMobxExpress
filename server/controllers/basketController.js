const {Basket,BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError')



class BasketController {
    async create( req, res,next) {

        try {
            let {phone, items, strCounts} = req.body

            let basket = await Basket.create({phone})
            if (items) {

                items = JSON.parse(items)
                strCounts = JSON.parse(strCounts)

                items.forEach( i => {
                    BasketDevice.create({
                        basketId: basket.id,
                        deviceId: i.id,
                        count: strCounts[0][i.id]
                    })
                })
            }

        }
        catch (e) {
            ApiError.badRequest(e.message)
        }


    }
    async getAll( req, res) {
        const basket = await Basket.findAll()
        return res.json(basket)
    }

}


module.exports = new BasketController()