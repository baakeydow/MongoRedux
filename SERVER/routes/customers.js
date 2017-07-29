
/*
 * GET users listing.
 */

exports.list = function(req, res){
  req.getConnection(function(errors, connection) {
        if (!connection) {
          res.json(errors);
          return;
        }
        var query = connection.query('SELECT * FROM customer', function(err, rows)
        {
            if (err)
                console.log("Error Selecting : %s ", err);
            res.json(rows);
        });
        console.log(query.sql);
    });
};

exports.add = function(req, res){
  console.log(req);
  res.json(req.body);
};

exports.edit = function(req, res){
    var id = req.params.id;
    req.getConnection(function(errors, connection) {
        if (!connection) {
          res.json(errors);
          return;
        }
        var query = connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows)
        {
            if (err)
                console.log("Error Selecting : %s ",err );
            res.json(rows);
         });
         console.log(query.sql);
    });
};

/*Save the customer*/
exports.save = function(req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function (errors, connection) {
        if (!connection) {
          res.json(errors);
          return;
        }
        var data = {
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone
        };
        var query = connection.query("INSERT INTO customer set ? ", data, function(err, rows)
        {
            if (err)
                console.log("Error inserting : %s ",err );
            res.json(rows);
        });
       console.log(query.sql);
    });
};

exports.save_edit = function(req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    req.getConnection(function (errors, connection) {
        if (!connection) {
          res.json(errors);
          return;
        }
        var data = {
            name    : input.name,
            address : input.address,
            email   : input.email,
            phone   : input.phone
        };
        connection.query("UPDATE customer set ? WHERE id = ? ", [data, id], function(err, rows)
        {
          if (err)
              console.log("Error Updating : %s ",err );
          res.json(rows);
        });
    });
};


exports.delete_customer = function(req, res) {
     var id = req.params.id;
     req.getConnection(function (errors, connection) {
        if (!connection) {
          res.json(errors);
          return;
        }
        connection.query("DELETE FROM customer  WHERE id = ? ", [id], function(err, rows)
        {
             if (err)
                 console.log("Error deleting : %s ",err );
            res.json(rows);
        });
     });
};
