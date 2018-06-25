const express = require('express')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

router.get('/:path', (req, res) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  var data = {}
  cloudinary.v2.api.resources_by_tag(req.params.path, {max_results: 100, context: true},
    function(error, result){
      res.send(result)
    }
  )
})

module.exports = {
    path: '/api/focus',
    handler: router
}
