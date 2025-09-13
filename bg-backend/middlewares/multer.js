import multer from "multer";

const storage = multer.diskStorage({
  filname: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;
