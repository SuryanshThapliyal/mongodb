import {Article} from "./models/article.js";

const result = await Article.aggregate([
    { $unwind: "$tags" },
    { $match: { tags: "mongodb" } },
    { $project: {
        title: 1,
        author: 1,
    }}
]);

console.log(result);