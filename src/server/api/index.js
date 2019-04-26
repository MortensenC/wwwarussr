import express from "express";
import sendgrid from "@sendgrid/mail";

const router = express.Router();

router.get("contactus", function(req, res) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
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
  sendgrid.send(msg);
});

export default router;
