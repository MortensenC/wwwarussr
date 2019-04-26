import express from "express";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const router = express.Router();

router.post("/contactus", async (req, res) => {
  const msg = {
    to: "patrick.ortell@arus.io",
    from: "test@example.com",
    subject: "Contact form from Arus",
    html:
      // eslint-disable-next-line prefer-template
      "<p>Name: " +
      req.body.name +
      "</p><p>Email: " +
      req.body.email +
      "</p><p>Telephone: " +
      req.body.telephone +
      "</p><p>Message: " +
      req.body.message +
      "</p>"
  };
  try {
    await sendgrid.send(msg);
    res.status(201).send();
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.all("*", (req, res) => {
  res.status(404).send(); 
});

export default router;
