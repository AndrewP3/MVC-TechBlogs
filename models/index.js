const user = require("./user");
const blog = require("./blog");
const comment = require("./comment");

// Route
user.hasMany(blog, {
  foreignKey: "user_id",
});

blog.belongsTo(user, {
  foreignKey: "user_id",
});

comment.belongsTo(user, {
  foreignKey: "user_id",
});

comment.belongsTo(blog, {
  foreignKey: "blog_id",
});

user.hasMany(comment, {
  foreignKey: "user_id",
});

blog.hasMany(comment, {
  foreignKey: "blog_id",
});

module.exports = { user, blog, comment };
