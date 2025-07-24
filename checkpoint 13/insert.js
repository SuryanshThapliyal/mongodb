import { Article } from "./models/article.js";
import { Author } from "./models/author.js";


let author;

try {
author = await Author.create(
    {
        name: "John Doe",
        bio: "Author of several articles on web development.",
        articles: []
    },
);
console.log("Authors inserted successfully");
}
catch (error) {
    console.error("Error inserting authors:", error);
}

try {
await Article.create([
    {
        title: "Sample Article",
        author: "John Doe",
        tags: ["sample", "article"],
        createdAt: new Date(),
        authorId: author._id // Assuming you want to link the article to the author
    },
]);
console.log("Articles inserted successfully");
}
catch (error) {
    console.error("Error inserting articles:", error);
}