const nodemailer = require('nodemailer');
const { gmailPass } = require('../../config/keys');
const router = require('express').Router();

const main = async ({ name, email, message }, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jordansbarbosa01@gmail.com',
      pass: gmailPass,
    },
  });

  const formated_message = `Name: ${name} \nEmail: ${email} \nMessage: ${message}`;

  return await transporter.sendMail(
    {
      to: 'jordansbarbosa01@gmail.com',
      replyTo: email,
      subject: `Contact form @ Jordanbarbosa.com | ${name}`,
      text: formated_message,
    },
    err => {
      if (err) {
        console.log(err);
        return res.json({ success: false });
      } else {
        return res.json({ success: true });
      }
    },
  );
};

router.post('/', (req, res) => {
  const { body } = req;

  main(body, res).catch(e => console.error(e));
});

module.exports = router;
