
const getLogin = (req, res) => {
	
	const isLogin = req.session.userId
	
	res.render('auth/login', {isLogin})
	
}

module.exports = getLogin