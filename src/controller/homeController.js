
const Product = require('../model/Product.js')
const License = require('../model/License.js')

const index = async (req, res) => {
	
	try{
		
		const isLogin = req.session.userId
	
		const products = await Product.findAll({
			
			include:[{ model: License }]
			
			
		})
		
		
		const licenses = await License.findAll()
	
		res.render('index', { isLogin, licenses, products })
		
		
	}catch(err){
		
		res.send(err)
	}
	
	
}

module.exports = index