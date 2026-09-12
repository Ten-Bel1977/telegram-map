import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/markers", (req, res) => {
  res.json([]);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Telegram map server started");
});
