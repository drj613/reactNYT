const mongoose = require("mongoose"),
        express = require("express"),
        Promise = require("bluebird"),
        app = express();

Mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        trim: true
    },
    url: {
        type: String,
        trim: true
    }
});

// remove an article
ArticleSchema.methods.deleteArticle = function(req, res){
    return this.model("Article")
    .findByIdAndRemove({_id: req.query._id})
    .exec(function(err, deleted){
        if(err){
            console.log(err);
        }
    });
};

// save article
ArticleSchema.methods.saveArticle = function(req, res, article){
    return this
    .save({article: req.query})
    .then(function(data){
        console.log(data);
    }).catch(function(e){
        console.error("error");
    });
};

// get articles
ArticleSchema.methods.getArticles = function(req, res){
    return this.model("Article")
    .find({})
    .then(function(data){
        console.log('find getArticles ' + util.inspect(data));
        res.json(data);
    });
};

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;