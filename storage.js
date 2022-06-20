const multer = require('multer');

const storage = multer({ dest: 'public/storage' });

module.exports = storage;