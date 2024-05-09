export default async (req, res) => {
  try {
    if (req.user) {
      res.json({ user: req.user.nick });
    } else {
      res.json({ result: "not login" });
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err });
  }
};
