import express from "express";
import cors from "cors";

// Carga variables de entorno (.env)
import "./config/env.js";

// Rutas
import healthRoutes from "./routes/health.js";
import whatsappRoutes from "./routes/whatsapp.js"; // 👈 NUEVO

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // 👈 CLAVE PARA TWILIO

// Rutas
app.use("/", healthRoutes);
app.use("/", whatsappRoutes); // 👈 NUEVO

// Puerto
const PORT = process.env.PORT || 3000;

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});