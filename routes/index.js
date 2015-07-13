var express = require('express');
var router = express.Router();

/* GET  page autor */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res) {
  res.render('author', { title: 'Cŕeditos' });
});

module.exports = router;
