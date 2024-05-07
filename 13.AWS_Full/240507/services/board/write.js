import { Board, Category } from "../../models/index.js";

export default async (req, res) => {
  try {
    if (!req.user) throw new Error("not logged in");
    const category = await Category.findOne({
      where: { id: req.body.categoryId },
    });
    const board = await Board.create(req.body);
    await category.addBoard(board);
    await req.user.addBoard(board);
    res.json(board);
  } catch (err) {
    console.error(err);
    res.send("error");
  }
};
