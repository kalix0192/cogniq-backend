import express from "express";
import twilio from "twilio";

const router = express.Router();

router.post("/whatsapp", (req, res) => {
  const twiml = new twilio.twiml.MessagingResponse();

  twiml.message("🤖 Cogniq está activo y te recibió.");

  res.set("Content-Type", "text/xml");
  res.status(200).send(twiml.toString());
});

export default router;