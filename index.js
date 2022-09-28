// -- http://localhost:3000/ -- //

var express = require('express');
var cors = require('cors');
// const bodyParser = require('body-parser');
const multer = require('multer');
require('dotenv').config()

const upload = multer({ dest: 'public/' });
var app = express();

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


// -- POST request uploading local file with name, type, size in JSON response -- //
app.post("/api/fileanalyse", upload.single('upfile'), (req, res) => {
  console.log(req.file)
  console.log(req.body)
  res.json({ 
    name: req.file.originalname, 
    type: req.file.mimetype, 
    size: req.file.size })
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
