
const Product = require('../../model/Product.js')
const License = require('../../model/License.js') 


const getItem = async (req, res) => {
	
	try{
		
		const product = await Product.findOne({
				
			raw: true,
			where:{
				id: req.params.id
			},
			
			include: [
				{
					model: License,
					required: true
				}
			],
		
			
		})
		
		const products = await Product.findAll({
			
			include: [{
				model: License,
				required: true
			}]
			
		})
		
		
		const isLogin = req.session.userId
		res.render('shop/item', {isLogin, product, products})
		
	}catch(err){
		
		res.send(err)
		
	}
	
		
		
	

	
}

module.exports = getItem