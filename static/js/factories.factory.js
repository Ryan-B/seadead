app.factory('ProductsFactory', function($http){
	return {
		getProducts: function(callback){
			console.log("ProductsFactory getProducts");
			$http.get('/products').success(function(response){
				callback(response);
			})
		},
		addProduct: function(newProduct, callback){
			console.log("ProductsFactory addProduct");
			$http.post('/products', newProduct).success(function(response){
				callback();
			})
		},
		removeProduct: function(product, callback){
			console.log("ProductsFactory RemoveProduct", product);
			$http.delete('/products/'+product._id).success(function(response){
				callback();
			})
		}
	}
})