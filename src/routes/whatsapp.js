import express from "express";

const router = express.Router();

router.post("/whatsapp", (req, res) => {
  const incomingMsg = req.body.Body;
  const from = req.body.From;

  console.log("📩 Mensaje recibido:", incomingMsg, "de", from);

  res.set("Content-Type", "text/xml");
  res.send(`
    <Response>
      <Message>
        👋 Hola, soy Cogniq 🤖  
        Recibí tu mensaje: "${incomingMsg}"
      </Message>
    </Response>
  `);
});

export default router;