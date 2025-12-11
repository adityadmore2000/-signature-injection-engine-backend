import express from "express";
import upload from "./api/upload.js";
import pdfRouter from "./api/pdf.js"
import cors from "cors";

const app = express();

const PORT = 3000;

app.use(cors());
app.use('/upload', upload);
app.use("/pdf", pdfRouter);

app.listen(PORT, () => { console.log(`Listening on : http://localhost:${PORT}`) });