const {User, Basket} = require('../models/models')

const bcrypt = require('bcrypt')

const ApiError = require('../error/ApiError')
const jwt = require("jsonwebtoken");


const generateJwt = (id, email, role) => {
   return jwt.sign({id ,email,role},process.env.SECRET_KEY,
        {expiresIn: "24h"})
}


class UserController {
    async registration(req, res, next) {
        let {email, password, role} = req.body

        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный меил или пароль'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь уже существует'))

        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email , password: hashPassword, role })
        const basket = await Basket.create({userId: user.id})
        let token =  generateJwt(user.id, user.email,user.role)
        return res.json({token})
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest("Не указан id"))
        }
        res.json(id)
    }
}


module.exports = new UserController()