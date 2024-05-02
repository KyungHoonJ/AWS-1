const mysql = require("mysql");

const createConnection = () => {
  return mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "aws",
    password: "1234qwER!@",
    database: "AWS_TEST",
  });
};
// const createConnection = () => {
//   let connection;
//   return {
//     connect: () => {
//       connection = mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "aws",
//         password: "1234qwER!@",
//         database: "AWS_TEST",
//       });
//       connection.connect();
//     },
//     end: () => {
//       connection.end();
//     },
//   };
// };

const init = () => {
  const connection = createConnection();
  connection.connect();

  connection.query("DROP TABLE IF EXISTS express_todo");
  connection.query("DROP TABLE IF EXISTS express_user");

  connection.query(`CREATE TABLE express_user (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id VARCHAR(20) NOT NULL UNIQUE,
password VARCHAR(64) NOT NULL,
name VARCHAR(10),
created_at DATETIME DEFAULT NOW()
)`);

  connection.query(`CREATE TABLE express_todo (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED,
working VARCHAR(50) NOT NULL,
is_complete BOOLEAN DEFAULT FALSE,
created_at DATETIME DEFAULT NOW(),
completed_at DATETIME,
limit_time DATETIME NOT NULL,
deleted_at DATETIME,
todo_id INT UNSIGNED,
FOREIGN KEY(user_id) REFERENCES express_user(id)
ON UPDATE CASCADE ON DELETE SET NULL,
FOREIGN KEY(todo_id) REFERENCES express_todo(id)
ON UPDATE CASCADE ON DELETE SET NULL
)`);

  connection.end();
};

const user = {
  create: (user) => {
    const connection = createConnection();
    connection.connect();

    connection.query(
      "INSERT INTO express_user (user_id, password, name) VALUES (?, ?, ?)",
      [user.id, user.pw, user.name],
      (err, results, fields) => {
        if (err) console.error(err);
        else {
          console.log(results);
        }
      }
    );

    connection.end();
  },
  get: (id) =>
    new Promise((resolve, reject) => {
      const connection = createConnection();
      connection.connect();
      connection.query(
        "SELECT * FROM express_user WHERE user_id=? and deleted_at IS NULL",
        [id],
        (err, results, fields) => {
          connection.end();
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    }),
};

module.exports = { init, user };
