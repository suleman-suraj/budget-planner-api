const Joi = require("joi")

//register user validation
const validateAddUser = new Joi.object({
    firstname: Joi.string().min(3).max(50).required(),
    lastname: Joi.string().min(3).max(50).required(),
    birthdate: Joi.string().min(3).max(50).required(),
    phone: Joi.string().min(3).max(150).required(),
    email: Joi.string().min(10).max(200).email().required(),
    password: Joi.string().min(8).max(50).required()
})
module.exports = {validateAddUser}