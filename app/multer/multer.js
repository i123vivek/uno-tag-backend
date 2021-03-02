const multer = require('multer');
const path = require('path');
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('file here is',req.body)
        if (!fs.existsSync('./uploads/')) {
			fs.mkdirSync('./uploads/');
		}
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
  
const upload = multer({ storage: storage }).single('file');


module.exports={
    upload : upload
}
