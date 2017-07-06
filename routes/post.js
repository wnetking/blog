var express = require('express');
var router = express.Router();
var posts = require('../data/posts')

/* GET users listing. */
router.post('/:id', function (req, res, next) {
  function filterByID(item) {
    return item.id == req.params.id;
  }

  res.json(posts.filter(filterByID));
});

router.post('/', function (req, res, next) {
  res.json(posts);
});

module.exports = router;
