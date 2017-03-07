const authenticationController = require('./controllers/authentication');

module.exports = function(app) {
    app.post('/signup', authenticationController.signup);


    app.get('/', function (req, res) {
        // send jest parsowane jako html
        res.send(`<h1>aktualny url: ${req.url}</h1>`);
        // res.send({test: "asd"}); // json zostanie sptynie rozpoznany ale mozna zrobic tylko 1 send
        //zawartowc end nie jest parsowana
        res.end();
    })
};