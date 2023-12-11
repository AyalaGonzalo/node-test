
const bcrypt = require('bcryptjs')
const User = require('../../model/User.js')

const postLogin = async (req, res) => {
	
	const isLogin = req.session.userId
	
	try{
		
		const user = await User.findOne({
			
			raw:true,
			where:{
				
				user_email: req.body.user_email
				
			}
			
		})
		
		if(!user){
			
			
			
			const error = [{msg: 'Email o contraseña incorrectos'}]
			
			return res.status(404).render('auth/login', { error, isLogin })
			
		}
		
		const result = await bcrypt.compare(req.body.user_password, user.user_password)
		
		if(!result){
			
			const error = [{msg: 'Email o contraseña incorrectos'}]
			
			return res.status(404).render('auth/login', { error, isLogin })
			
		}
	
		
		req.session.userId = user.user_id 
		
		
		console.log(req.body, user)
	
		res.redirect('/admin')
		
		
	}catch(err){
		
		res.status(500).send(err)
		
	}
	
	
	
}


module.exports = postLogin