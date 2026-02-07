import express from "express";
import cors from "cors";
import "./config/env.js";
import healthRoutes from "./routes/health.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", healthRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});