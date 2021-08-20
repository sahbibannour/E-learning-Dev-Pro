


module.exports.UploadFile= function (req, res, callback) {
  const file = req.file;
  if (file) {
    callback(null,res.json(req.file));
  } else throw "error";
}



module.exports.UploadMultipleFiles= function (req, res, callback) {
  const files = req.files;
  if (Array.isArray(files) && files.length > 0) {
    callback(null,res.json(req.files));
  } else {
    res.status(400);
    throw new Error("No file");
  }
};
















