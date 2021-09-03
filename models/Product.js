const mongoose = require('mongoose');
const { appConfig } = require('../config');
const Schema = mongoose.Schema;
//Se crea una collection 
const ProductSchema = Schema({
    name: String,
    size: Number,
    imgUrl: String,
    unitaryPrice: Number,
    description: String
}, {
    //Se registra la hora y si hubo alguna modificacion 
    timestamps: true
});
// se crea un metodo 
ProductSchema.methods.setImgUrl = function setImgUrl(fileName) {
    const { host, port } = appConfig;
    this.imgUrl = `${host}:${ port}/public/${fileName}`
}

module.exports = mongoose.model('Products', ProductSchema);