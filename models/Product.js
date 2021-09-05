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
// se crea un metodo para poder guardar la url en la base de datos  
ProductSchema.methods.setImgUrl = function setImgUrl(filename) {
    const { host, port } = appConfig;
    this.imgUrl = `${host}:${ port}/public/${filename}`
}


module.exports = mongoose.model('Products', ProductSchema);