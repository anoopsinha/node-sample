var app = require('express').createServer();
app.get('/', function(req, res) {
	res.send('Hola.  Hello from Cloud Foundry.  This is an update.  This is another update.');
    });
app.listen(process.env.VCAP_APP_PORT || 3000);