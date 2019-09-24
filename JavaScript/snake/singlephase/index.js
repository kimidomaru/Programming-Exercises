let express = require('express');
let app = express();
let port = 3000;

app.use(express.static(__dirname + '/public/'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(port, function () {
  console.log(`Ouvindo a porta ${port}!`);
});