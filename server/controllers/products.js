var Product = mongoose.model('Product');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Products - Index")
			Product.find({}, function(err, products){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(products);
					response.json(products);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Products - Create', request.body)
			var product = new Product;
			product.company_name = request.body.company_name;
			product.product_name = request.body.product_name;
			product.ufc_code = request.body.ufc_code;
			product.save(function(err){
				if(err){
					console.log(err);
					response.json({status:"false"});
				}
				else{
					response.json({status:"true"});
				}
			})
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Products - destroy")
			Product.remove({_id:request.params.id}, function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		}

	}
})();