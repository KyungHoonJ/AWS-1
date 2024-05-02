module.exports = `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <form action="http://localhost:3000" method="post">
    <fieldset>
      <legend>Sword Art Online</legend>
      <input type="text" name="id" placeholder="ID" />
      <input type="password" name="pw" placeholder="PW" />
      <button>Link Start</button>
      <button type="reset">Reset</button>
    </fieldset>
  </form>
  <ul id="users"></ul>
  <script>
    const getUsers = async () => {
      try {
        const usersRes = await fetch("http://localhost:3000/list", {
          mode: "no-cors",
        });
        console.log(usersRes);
        const usersData = await usersRes.text();
        console.log(usersData);
        const userArr = JSON.parse(usersData);
        console.log(userArr);
        //   const userArr = JSON.parse(
        //     await (await fetch("http://localhost:3000/list")).text()
        //   );
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
  </script>
</body>
</html>
`;
