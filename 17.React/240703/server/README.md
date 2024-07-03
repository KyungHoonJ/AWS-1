# mySQL Setting

```sql
use mysql;
CREATE DATABASE todo_list;
CREATE USER `ts_todo`@`localhost` IDENTIFIED WITH mysql_native_password BY '1234QWer!@';
GRANT ALL PRIVILEGES ON todo_list.* TO `ts_todo`@`localhost`;
```
