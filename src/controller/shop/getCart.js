
const getCart = (req, res) => {
	
	const isLogin = req.session.userId
	
	res.render('shop/cart', {isLogin})
	
}


module.exports = getCart