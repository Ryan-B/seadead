var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	company_name: { type: String, trim: true },
	product_name: { type: String, trim: true },
	ufc_code: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Product = mongoose.model('Product', ProductSchema);
ProductSchema.path('company_name').required(true, "Company is required");
ProductSchema.path('product_name').required(true, "Product is required");
ProductSchema.path('ufc_code').required(true, "ufc_code is required");