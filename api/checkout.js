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
  var output = `
    <h1>You have a new rental Request</h1>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Products</h3>
    <ul>
  `
  for (var product in req.body.cart) {
    output += `<li> <img src="${req.body.cart[product].image}" width="100" height="100">
    <p>${req.body.cart[product].title}</p>
    <p>Quantity: ${req.body.cart[product].count}</p>
    <p>Price: ${req.body.cart[product].price}</p>`
  }
  output += `
  </ul>
  <h3>Total</h3>
    <p>Number of Items: ${req.body.cartTotal}</p>
    <p>Total Price: ${req.body.totalCost}</p>
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
      to: [process.env.GMAIL_USERNAME, req.body.email],
      subject: 'Message from HiLightProductions.com',
      html: output
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    else {
      res.send('Request sent!')
    }
  })
})

module.exports = {
    path: '/api/checkout',
    handler: router
}
