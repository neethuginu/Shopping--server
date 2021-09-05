const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping_server",{useNewUrlParser:true,useUnifiedTopology: true })

const Products=mongoose.model('Products',{
    title:  String,
    description:String,
    image:String
})

module.exports ={
    Products
};


