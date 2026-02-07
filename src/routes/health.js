import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "CogniQ backend activo 🚀",
    time: new Date().toISOString()
  });
});

export default router;