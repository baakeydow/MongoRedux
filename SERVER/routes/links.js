var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([{
      id: 1,
      url: "https://github.com/bndao"
    }, {
      id: 2,
      url: "https://github.com/bndao/MongoRedux.git"
    }]);
    console.log('links');
});

module.exports = router;
