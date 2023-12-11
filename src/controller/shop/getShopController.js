
const Product = require('../../model/Product.js')
const License = require('../../model/License.js') 

const getShop = async (req, res) => {
	
	try{
		

		const product = await Product.findAll({
			
			include:[{ model: License }]
			
		})
		
		const isLogin = req.session.userId
		
		res.render('shop/shop', {product, isLogin})
		
	}catch(err){
	
	
		res.status(500).send(err)
	
	}

	
}


module.exports = getShop