const express = require('express')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()

cloudinary.config({
  cloud_name: 'rivera-web-solutions',
  api_key: '241371439292377',
  api_secret: 'xJeFn6_7_PJSGSHDLcHJi7FV30c'
})

router.use((req, res) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  var data = {}
  cloudinary.v2.api.resources_by_tag("gallery", {context: true},
    function(error, result){
      res.send(result)
    }
  )
})

module.exports = {
    path: '/api',
    handler: router
}
