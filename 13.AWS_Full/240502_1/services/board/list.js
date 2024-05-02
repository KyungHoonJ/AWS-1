import { Board, Category } from "../../models/index.js";

export default async (req, res) => {
  try {
    const list = await Board.findAll({
      include: [
        {
          model: Category,
        },
      ],
    });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.send("error");
  }
};
