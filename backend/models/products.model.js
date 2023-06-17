const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    product_id:{
        type:String,
        required:true
    },
    organization_id:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    product_description:{
        type:String,
        required:true
    },
    product_rating:{
        type:Number,
        required:true
    },
    stock_utls:{
        type:Number,
        required:false
    },
    product_uri:{
        type:String,
        required:false
    }
    
})
const ProdectModel=mongoose.model('Product',ProductSchema);
module.exports=ProdectModel;