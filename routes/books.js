var express = require('express');
var router = express.Router();
var unirest = require('unirest');


/* GET home page. */
router.get('/', function(req, res, next) {
  unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + process.env.    NYT_API_KEY)
    .end(function (response) {
      var NYTbooks = response.body.results.books;
      res.render('books/index', {books: NYTbooks})
    })
});

module.exports = router;
