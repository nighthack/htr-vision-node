const vision = require("@google-cloud/vision");

const client = new vision.ImageAnnotatorClient();

const htrDetect = async (req, res) => {
  // Uploaded file
  const uploadedFile = req.file;
  if (!uploadedFile)
    return res.status(400).json({ message: "Please select a file to upload" });
  // HTR visoin api
  const [result] = await client.documentTextDetection(uploadedFile.path);
  const detectedTxt = result.fullTextAnnotation;
  return res.status(200).json(detectedTxt);
};

module.exports = { htrDetect };
