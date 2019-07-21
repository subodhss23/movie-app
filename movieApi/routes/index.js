var express = require('express');
var router = express.Router();

const movies = require('../data/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/most_popular', function(req, res, next){
  if(req.query.api_key != 123456789){
    res.json("Invalid API key");
  } else {
    const results = movies.filter(function(movie){
      return movie.most_popular;
  })
  res.json(results);
}
});



module.exports = router;
