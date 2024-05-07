import { User } from "../../models/index.js";

export default async (req, res) => {
  try {
    if (req.body.pw != req.body["pw-check"]) {
      throw new Error("not match password");
    }
    const user = await User.create(req.body);
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};

// if (num > 1)
//   for (let i = 0; i < num; ++i)
//     console.log(i);
