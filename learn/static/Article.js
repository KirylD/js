function Article() {
    Article.countInstance++;
    Article.lastDate = new Date();
}

Article.countInstance = 0;
Article.lastDate = 0;
Article.showStats = function () {
    console.log("Created " + this.countInstance + "; Last created in " + this.lastDate);
};

new Article();
new Article();
new Article();
Article.showStats();