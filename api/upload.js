
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
    if(!req.file){
        return res.status(400).json({error:"No pdf uploaded!!!"})
    }
    res.json({
        id:req.file.filename,
        url:`/pdf/${req.file.filename}`
    })
    return res.json({ id: req.generatedId });
});

export default router;