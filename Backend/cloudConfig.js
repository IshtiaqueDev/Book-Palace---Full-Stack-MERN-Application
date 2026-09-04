require("dotenv").config();

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    if (file.fieldname === "image") {
      return {
        folder: "BookPalace_Books/Images",
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        resource_type: "image"
      };
    }

    if (file.fieldname === "bookPDF") {
      return {
        folder: "BookPalace_Books/PDFs",
        resource_type: "raw",
        format: "pdf"
      };
    }
  }
});

const upload = multer({ storage,
    limits: {
        fileSize: 10 * 1024 * 1024
    } });
module.exports = upload;