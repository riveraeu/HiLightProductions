const express = require('express')
const cloudinary = require('cloudinary')

// For development, take out when deploying
var dotenv = require('dotenv');
dotenv.load();

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
  cloudinary.v2.api.resources_by_tag("gallery", {context: true},
    function(error, result){
      result.resources.forEach(function(image) {
        image.secure_url = image.secure_url.substr(0, 60) + "/q_auto" + image.secure_url.substr(60);
      })
      res.send(result)
    }
  )
})

module.exports = {
    path: '/api/gallery',
    handler: router
}
