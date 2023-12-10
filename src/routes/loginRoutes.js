

const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

const getLogin = require('../controller/auth/getLogin.js')
const postLogin = require('../controller/auth/postLogin.js')


const loginValidations = [
	
	body('user_email')
		.isEmail()
		.withMessage('Ingrese un correo electronico valido'),
	body('user_password')
		.isStrongPassword({
		minLength: 6,
		minLowercase: 1,
		minUppercase: 1,
		minNumbers: 1,
		minSymbols: 1,
		})
		.withMessage('La contraseña debe tener un minimo de 6 caracteres, una letra mayuscula y minuscula, un numero y un simbolo')

	
	
]

router.get('/auth/login', getLogin)

router.post('/auth/login', postLogin)



module.exports = router