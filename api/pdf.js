import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const filePath = path.join(__dirname, "..", "uploads", id);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error sending PDF: ", err);
            res.status(404).json({ error: "PDF not found" });
        }
    })
});

export default router;