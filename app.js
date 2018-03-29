var express = require('express');
var app = express();
app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
    res.send("<h3>Hello. Welcome to the most secure website</h3>");
})

app.listen(app.get('port'), function () {
    console.log('Server is running on port', app.get('port'));
});

module.exports = app;
