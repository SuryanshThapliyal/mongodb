import { Article } from "./models/article.js";


try {
Article.create([
    {
        title: "Sample Article",
        author: "John Doe",
        tags: ["sample", "article"],
        createdAt: new Date()
    },
    {
        title: "Another Article",
        author: "Jane Doe",
        tags: ["another", "article"],
        createdAt: new Date()
    },
    {
        title: "Learning Mongoose",
        author: "John Smith",
        tags: ["mongoose", "mongodb"],
        createdAt: new Date()
    },
    {
        title: "Advanced Mongoose Techniques",
        author: "Jane Smith",
        tags: ["mongoose", "advanced"],
        createdAt: new Date()
    }
]);
console.log("Articles inserted successfully");
}
catch (error) {
    console.error("Error inserting articles:", error);
}