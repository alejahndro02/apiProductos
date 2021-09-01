const mongoose = require('mongoose');

mongoose.connection.on('open', () => console.log('Base de datod conectada'))
async function connectDb({ host, port, dbName }) {
    const uri = `mongodb://${ host }:${ port }/${ dbName }`
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}
module.exports = connectDb;