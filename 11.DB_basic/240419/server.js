const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "aws",
  password: "1234qwER!@",
  database: "AWS_TEST",
});

connection.connect();
// ALTER USER aws IDENTIFIED WITH mysql_native_password BY '1234qwER!@';

// connection.query("SHOW TABLES", (err, results, fields) => {
//   console.log("err : ", err);
//   console.log("results : ", results);
//   console.log("fields : ", fields);
// });
// connection.query("SELECT * FROM aws_student", (err, results, fields) => {
//   console.log("err : ", err);
//   console.log("results : ", results);
//   console.log("fields : ", fields);
// });
// console.log(mysql.Types);
// connection.query(
//   "INSERT INTO test (id, name, nick) VALUES (6, 'testing', 'testing')",
//   (err, results, fields) => {
//     console.log("err : ", err);
//     console.log("results : ", results);
//     console.log("fields : ", fields);
//   }
// );
// connection.query(
//   "INSERT INTO test (id, name, nick) VALUES (?, ?, ?)",
//   [8, "arr1", "arr1"],
//   (err, results, fields) => {
//     console.log("err : ", err);
//     console.log("results : ", results);
//     console.log("fields : ", fields);
//   }
// );

const findInTest = (id) => {
  connection.query(
    "SELECT * FROM test WHERE id=?",
    [id],
    (err, results, fields) => {
      console.log("err : ", err);
      console.log("results : ", results);
      //   console.log("fields : ", fields);
    }
  );
};

findInTest(3);

connection.end();
