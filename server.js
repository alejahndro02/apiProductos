require('dotenv').config(); //Esto es qeuivalente a const dotenv =required('dotenv); dotenv.config

const express = require('express');
const { appConfig } = require('./config');
const app = express();

app.listen(appConfig.port, () => console.log(`Escuchando por el puerto ${appConfig.port}`))