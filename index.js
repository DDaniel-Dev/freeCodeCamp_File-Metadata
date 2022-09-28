// -- http://localhost:3000/ -- //

var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});



app.post("/api/fileanalyse", (req, res) => {
  console.log(req.body)
  res.json({ success: true })
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
