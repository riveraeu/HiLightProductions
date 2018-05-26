const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

var dotenv = require('dotenv');
dotenv.load();

const app = express()
const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', (req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  const output = `
    <h1>You have a new contact message</h1>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Options</h3>
    <p>${req.body.options}</p>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `

  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user: process.env.GMAIL_USERNAME,
          pass: process.env.GMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
  })
  let mailOptions = {
      from: process.env.GMAIL_USERNAME,
      to: process.env.GMAIL_USERNAME,
      subject: 'Message from HiLightProductions.com',
      html: output
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    else {
      res.send('Email sent!')
    }
  })
})

module.exports = {
    path: '/api/mail',
    handler: router
}
