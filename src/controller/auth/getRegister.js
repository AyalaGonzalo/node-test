
const getRegister = (req, res) => {
	
	const isLogin = req.session.userId
	
	res.render('auth/register', {isLogin})
	
	
	
}

module.exports = getRegister