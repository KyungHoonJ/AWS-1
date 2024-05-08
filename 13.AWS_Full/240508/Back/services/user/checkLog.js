import { User } from "../../models/index.js";

export default async (req, res, next) => {
  try {
    if (req.signedCookies.user) {
      req.user = await User.findOne({
        where: { id: req.signedCookies.user },
      });
    }
  } catch (err) {
    console.error(err);
  } finally {
    next();
  }
};
