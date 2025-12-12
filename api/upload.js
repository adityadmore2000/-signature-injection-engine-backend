
import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        const id = Date.now().toString();
        req.generatedId = id;
        cb(null, `${id}.pdf`)
    }
});

const upload = multer({ storage });

router.post("/", upload.single("pdf"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No pdf uploaded!!!" })
    }
    const generatedId = req.file.filename;

    return res.json({
        id: generatedId,
        url: `/pdf/${generatedId}`
    })
});

export default router;