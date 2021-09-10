const Producto = require('../models/Product');

async function addProduct(req, res) {
    try {
        const { name, size, unitaryPrice, description } = req.body;
        //Se hace una instacia del modelo para poder guardar la ruta 
        const product = Producto({ name, size, unitaryPrice, description });

        if (req.file) {
            const { filename } = req.file;
            product.setImgUrl(filename);
        }

        //se guardan los datos en la base con el metodo save()
        const productStored = await product.save();

        res.status(201).send({ productStored });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

module.exports = {
    addProduct
}