


var express = require('express'); // Web Framework
var app = express();
var bodyParser = require("body-parser");
var sql = require('mssql'); // MS Sql Server client
var app = express();

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});


// Connection string parameters.

var sqlConfig = {
   server: 'CLAIRELAPTOP',
    authentication: {
        type: 'default',
        options: {
            userName: 'RestAPI',
            password: 'RestAPIPassword'
        }
    },
    options: {
        database: 'HPEPWA',
        rowCollectionOnDone: true,
        useColumnNames: false
    }

}



// Start server and listen on http://localhost:8081/

var server = app.listen(8081, function () {
    
    var host = server.address().address
    var port = server.address().port
    console.log("app listening at http://%s:%s", host, port)
});

//Setting up server
// var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//  });

//Function to connect to database and execute query
var  executeQuery = function(res, query){             
    sql.connect(sqlConfig, function (err) {
        if (err) {   
                    console.log("Error while connecting database :- " + err);
                    res.send(err);
                 }
                 else {
                        // create Request object
                        var request = new sql.Request();
                        // query to the database
                        request.query(query, function (err, result) {
                            if (err) {
                            console.log("Error while querying database :- " + err);
                            res.send(err);
                            }
                            else {
                            res.send(result);
                            }
                            });
                      }
     });           
}

app.get('/bookmark', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query('SELECT * from app.document where DOCUMENTID in (select DOCUMENTID from APP.BOOKMARK where USERID = 12345678);', function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.get('/Documents', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query('SELECT * from APP.DOCUMENT;', function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });

    });
})

app.get('/Documents/:id', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        var stringRequest = 'select * from APP.DOCUMENT where DOCUMENTID = \'' + req.params.id + '\';';
        request.query(stringRequest, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

//POST API
app.post("/Bookmark/:docIDs", function(req , res){
    var query = 'INSERT INTO app.BOOKMARK values (12345678, NULL, \'' + req.params.docIDs + '\');';
    console.log(query);
    executeQuery (res, query);
});

app.delete("/bookmark/:docIDs", function(req, res){
    var query = 'DELETE FROM app.BOOKMARK WHERE USERID = 12345678 AND DOCUMENTID = \''+ req.params.docIDs + '\';';
    
    executeQuery(res, query);
});

app.get('/folders', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query('SELECT * from app.folder where USERID = 12345678 ', function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.get('/folders/:ID', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        var stringRequest = 'select * from APP.FOLDER where FOLDERID = ' + req.params.ID + ';';
        request.query(stringRequest, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.post("/folders/:folderIDs/:folderName", function(req , res){
    var query = 'INSERT INTO app.FOLDER values ('+ req.params.folderIDs + ', \'' + req.params.folderName + '\',  12345678);';
    executeQuery (res, query);
});

app.delete("/folders/:folderIDs", function(req, res){
    var query = 'DELETE FROM app.FOLDER WHERE USERID = 12345678 AND FOLDERID = '+ req.params.folderIDs + ';';
    console.log(query);
    executeQuery(res, query);
});


/*app.delete("/bookmark /:DOCUMENTID", function(req, res){
    console.log(DOCUMENTID);
    var query = 'DELETE FROM app.BOOKMARK WHERE USERID = 12345678 AND DOCUMENTID = \'' + req.params.DOCUMENTID + '\';';
    
    executeQuery(res, query);
});
*/


// app.get('/addBookmark', function(req, res){
//     sql.connect(sqlConfig, function(){
//         var request = new sql.Request();
//         request.query('INSERT INTO app.BOOKMARK values (11223344, NULL, \'DOC02\');')
//     })
// })
