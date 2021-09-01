const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;
//Se crea una collection 
const ProductSchema = new Schema({
    name: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String
}, {
    //Se registra la hora y si hubo alguna modificacion 
    timestamps: true
});
module.exports = mongoose.model('Products', ProductSchema);