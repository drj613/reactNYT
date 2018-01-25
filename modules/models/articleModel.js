const mongoose = require("mongoose"),
        express = require("express"),
        Promise = require("bluebird"),
        app = express();

Mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
    date: String,
    url: String
});

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;