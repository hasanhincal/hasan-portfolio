import path from "path";
import { promises as fs } from "fs";

export default async (req, res) => {
  const filePath = path.join(process.cwd(), "public", "cv.pdf");
  const fileContents = await fs.readFile(filePath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Hasan_Hincal_CV.pdf"
  );
  res.send(fileContents);
};
