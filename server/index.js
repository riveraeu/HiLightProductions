const express = require('express');
const bodyParser = require('body-parser');
//const exphbs = require('express-handlebars');
//const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('https://hilightproductions.herokuapp.com/send', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.USER, // generated ethereal user
        pass: process.env.PASS // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"contact@hilightproductions.com', // sender address
    to: 'eugenejrivera@gmail.com', // list of receivers
    subject: 'hilightproductions contact', // Subject line
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
});
