
require('dotenv').config()


const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require('method-override')
const sequelize = require('./src/config/connection.js')

const session = require('cookie-session')

require('./src/config/associations.js')

app.use(express.urlencoded({extended: false}))
app.use(express.json())



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "/src/views"))

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'/public')))
app.use(session({
	
	keys:["S3cr3t01", "S3cr3t02"]
	
}))

const isLogin = (req, res, next) => {
	
	if(!req.session.userId){
		
		return res.redirect('/auth/login')
		
	}
	
	next()
	
}


app.use(require('./src/routes/loginRoutes.js'))
app.use(require('./src/routes/homeRoutes.js'))
app.use(require('./src/routes/adminRoutes.js'))
app.use(require('./src/routes/logOutRoutes.js'))
app.use(require('./src/routes/shopRoutes.js'))
app.use(require('./src/routes/registerRoutes.js'))


const PORT = process.env.PORT || 3000

app.listen(PORT, async () =>{
	
	try{
		
		await sequelize.authenticate()
		await sequelize.sync()
	
	
		console.log(`Server is running on port: ${PORT}`)
		
	}catch(err){
		
		console.log(err)
		
	}
	
	
})