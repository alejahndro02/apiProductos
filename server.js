//Se impora la libreria de doenv para poder uilizar las variables guardadas en el archivo env
require('dotenv').config(); //Esto es qeuivalente a const dotenv =required('dotenv); dotenv.config

//Se importan los valores del archivo app que contienen las configuraciones y rutas de express
const app = require('./app')

//Se importa la db
const connectDb = require('./db/db');

//Se importa el achivo config donde se encuentran las configuraciones de las variables de entorno
const { appConfig, dbConfig } = require('./config');

async function initApp(appConfig, dbConfig) {
    try {
        await connectDb(dbConfig);
        app.listen(appConfig.port, () => console.log(`Escuchando por el puerto ${appConfig.port}`))
    } catch (err) {
        console.log(err);
        process.exit(0)
    }

}
initApp(appConfig, dbConfig);