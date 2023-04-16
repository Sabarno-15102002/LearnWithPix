const multer = require('multer');

const storage = multer.memoryStorage();
const filefilter = (req, file, cb) => {
    if (file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|bmp|BMP)$/)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: filefilter });

module.exports = { upload }