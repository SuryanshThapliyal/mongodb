import {Article} from "./model/db.js";

try {
Article.create([
    {
        "title": "eee aaa",
        "author": "John Doe",
        "tags": ["sample", "article"],
    },
]);
console.log("Articles inserted successfully");

}
catch (error) {
    console.error("Error inserting articles:", error);
}