const multer = require('multer');
//Se agrega de manera local 
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './storage/imgs')
    },
    filename: function(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}.png`);

    }
})

const upload = multer({ storage });
module.exports = upload