import { Article } from "./model/db.js";

const result = await Article.aggregate([
    { $match: { tags: "sample"}},
    {
        $project: {
            
            title: 1,
            tags: 1
        }
    }
]);

console.log(result);