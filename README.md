# node-mysql-es6-query
A helper function to build queries with ES6 template strings.

## How it works

```js
"use strict";
let mysql = require("mysql");
let SQL = require( "sql"))(mysql.escape);

//now you can write SQL in front of the ES6 Template Strings and they get escaped
 connection.query(SQL`SELECT username, password
                      FROM account
                      WHERE username = ${username}
                      LIMIT 1`, (err, rows) => {

 //more code
});
