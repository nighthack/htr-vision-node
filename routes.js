const router = require("express").Router();
// Multer uploader
const imgUploader = require("./middlewares/image-upload");
// HTR controller
const { htrDetect } = require("./controller/htr-detect");

// Detect images
router.post("/detect", imgUploader.single("image"), htrDetect);

module.exports = router;
