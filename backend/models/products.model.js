const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    productd:{
        type:String,
        required:true
    },
    organizationd:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },
    productRating:{
        type:Number,
        required:true
    },
    stockUtls:{
        type:Number,
        required:false
    },
    productUri:{
        type:String,
        required:false
    }
    
})
const ProdectModel=mongoose.model('Product',ProductSchema);
module.exports=ProdectModel;