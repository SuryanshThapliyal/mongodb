import {Article} from "./models/article.js";

const result = await Article.aggregate([
    {
        $lookup: {
            from: "authors", // Assuming the collection name for authors is 'authors'
            localField: "authorId",
            foreignField: "_id",
            as: "authorInfo"
        }
    },
    { $unwind: "$authorInfo" },
]);

console.log(result);