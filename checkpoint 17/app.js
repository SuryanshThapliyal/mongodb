import express from "express";
import helmet from "helmet";
import expressMongoSanitize from "@exortek/express-mongo-sanitize";
import articleRouter from "./routes/article.js";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the compatible sanitizer middleware
app.use(expressMongoSanitize());

app.use("/", articleRouter);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
