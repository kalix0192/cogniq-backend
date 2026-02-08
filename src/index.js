import express from "express";
import cors from "cors";

// Cargar variables de entorno (.env o Render env vars)
import "./config/env.js";

// Rutas
import healthRoutes from "./routes/health.js";
import whatsappRoutes from "./routes/whatsapp.js";

const app = express();

// Middlewares
app.use(cors());

// ⚠️ IMPORTANTE para Twilio (body en formato correcto)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.use("/", healthRoutes);
app.use("/webhook", whatsappRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Cogniq activo en http://localhost:${PORT}`);
});