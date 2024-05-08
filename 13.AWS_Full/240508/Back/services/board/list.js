import { Board, Category, User } from "../../models/index.js";

export default async (req, res) => {
  try {
    const list = await Board.findAll({
      include: [
        {
          model: Category, // Board에서의 카테고리 가져오기
          include: [
            {
              model: Category, // 상위 카테고리 가져오기
              as: "parent",
              attributes: {
                exclude: ["createdAt", "updatedAt", "deletedAt"],
              },
              include: [
                {
                  model: Category, // 하위 카테고리 가져오기
                  as: "children",
                  attributes: {
                    exclude: ["createdAt", "updatedAt", "deletedAt"],
                  },
                },
              ],
            },
            {
              model: Category, // 하위 카테고리 가져오기
              as: "children",
              attributes: {
                exclude: ["createdAt", "updatedAt", "deletedAt"],
              },
            },
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
        },
        {
          model: User,
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    });
    // SELECT `Board`.`id`, `Board`.`title`, `Board`.`content`, `Board`.`category_id` AS `CategoryId`,
    // `Category`.`id` AS `Category.id`,
    // `Category`.`name` AS `Category.name`,
    // `Category`.`href` AS `Category.href`,
    // `Category`.`auth_level` AS `Category.authLevel`,
    // `Category`.`category_id` AS `Category.categoryId`,
    // `Category->parent`.`id` AS `Category.parent.id`,
    // `Category->parent`.`name` AS `Category.parent.name`,
    // `Category->parent`.`href` AS `Category.parent.href`,
    // `Category->parent`.`auth_level` AS `Category.parent.authLevel`,
    // `Category->parent`.`category_id` AS `Category.parent.categoryId`,
    // `Category->parent->children`.`id` AS `Category.parent.children.id`,
    // `Category->parent->children`.`name` AS `Category.parent.children.name`,
    // `Category->parent->children`.`href` AS `Category.parent.children.href`,
    // `Category->parent->children`.`auth_level` AS `Category.parent.children.authLevel`,
    // `Category->parent->children`.`category_id` AS `Category.parent.children.categoryId`
    // FROM `board` AS `Board`
    // LEFT OUTER JOIN `category` AS `Category`
    // ON `Board`.`category_id` = `Category`.`id` AND (`Category`.`deleted_at` IS NULL)
    // LEFT OUTER JOIN `category` AS `Category->parent`
    // ON `Category`.`category_id` = `Category->parent`.`id` AND (`Category->parent`.`deleted_at` IS NULL)
    // LEFT OUTER JOIN `category` AS `Category->parent->children`
    // ON `Category->parent`.`id` = `Category->parent->children`.`category_id` AND (`Category->parent->children`.`deleted_at` IS NULL)
    // WHERE (`Board`.`deleted_at` IS NULL);
    res.json(list);
  } catch (err) {
    console.error(err);
    res.send("error");
  }
};
