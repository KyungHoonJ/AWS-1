const getUsers = async () => {
  try {
    const usersRes = await fetch("http://localhost:3000", {
      method: "post",
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
