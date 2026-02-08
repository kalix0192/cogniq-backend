import express from "express";
import twilio from "twilio";

const router = express.Router();

router.post("/whatsapp", (req, res) => {
  console.log("📩 Mensaje entrante:", req.body.Body);

  const twiml = new twilio.twiml.MessagingResponse();
  twiml.message("🤖 Cogniq está activo y respondió correctamente.");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

export default router;