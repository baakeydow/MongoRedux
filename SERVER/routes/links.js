var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([{
      id: 1,
      url: "https://www.upwork.com/hiring/mobile/tips-for-building-a-safe-secure-api"
    }, {
      id: 2,
      url: "https://reacttraining.com/react-router/web/example/auth-workflow"
    },  {
      id: 3,
      url: "https://github.com/howtographql/howtographql"
    }]);
    console.log('links');
});

module.exports = router;
