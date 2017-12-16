var Crawler = require("crawler");
var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
const _ = require('lodash');

var c = new Crawler({
    maxConnections: 10,
});

app.use(bodyParser.json());

app.post('/api/scrape', function (req, res) {

    c.queue([{
        uri: req.body.url,

        // The global callback if any won't be called
        callback: function (error, response, done) {
            if (error) {
                console.log(error);
            } else {
                var $ = response.$;
                var images = [];
                $('img').filter(function () {
                    var data = $(this)[0].attribs.src;
                    if (data.startsWith('http'))
                        images.push(data);

                });
            }
            images = _.uniq(images);

            res.send({ images });
            done();
        }
    }]);
});

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || '5000';
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});