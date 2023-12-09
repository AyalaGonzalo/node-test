
const getLogOut = (req, res) => {
	
	
	req.session.userId = null
	
	res.redirect('/')
	
}

module.exports = getLogOut