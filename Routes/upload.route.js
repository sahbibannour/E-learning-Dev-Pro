const express= require("express");
const router = express.Router();
const multer = require("multer");


const UploadController = require("../Controllers/upload.controller");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  
  //var upload = multer({ dest: "uploads/" });
  
  var upload = multer({ storage: storage });
  
  router.post("/file", upload.single("file"),UploadController.UploadFile);

  router.post("/multiplefiles",upload.array("files"),UploadController.UploadMultipleFiles );



module.exports=router;