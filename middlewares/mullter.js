const multer = require("multer");
const path = require('path');
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../views/public/uploads'))
  },
  filename: (req, file, cb) => {
    const id = uuidv4();
    req.image = (`${path.join(__dirname, '../views/public/uploads')}${id}${path.extname(file.originalname)}`).toLowerCase();
    cb(null, (`${id}${path.extname(file.originalname)}`).toLowerCase());
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1000000, //una imágen menor a un mb
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimeTipe = filetypes.test(file.mimetype);
    const extName = filetypes.test(path.extname(file.originalname));
    if (mimeTipe && extName) {
      return cb(null, true);
    } else {
      return cb('Error: El archivo debe ser una imagen valida')
    }
  }
})

module.exports = upload;
