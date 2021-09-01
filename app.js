const express = require('express');
//Se importa la dependencia de routes para poder generar las rutas
const productRoutes = require('./routes/product')

const app = express();

app.use('/v1/', productRoutes);

module.exports = app;