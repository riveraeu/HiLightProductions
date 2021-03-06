const express = require('express')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

router.use((req, res) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  var data = {}
  cloudinary.v2.api.resources_by_tag("rentals", {context: true},
    function(error, result){
      res.send(result)
    }
  )
})

module.exports = {
    path: '/api/rentals',
    handler: router
}
