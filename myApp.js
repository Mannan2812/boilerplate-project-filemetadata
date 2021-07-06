const express = require('express')
const multer = require('multer')
var upload = multer()
const app = express()

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    var fileName = req.file.originalname
    var mimeType = req.file.mimetype
    var size = req.file.size
    res.json({
        "name":fileName,
        "type": mimeType,
        "size": size
    })
})


module.exports = app