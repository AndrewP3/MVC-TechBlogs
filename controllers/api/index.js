const router = require("express").Router();

const userRoute = require("./user-route");
const blogRoute = require("./blog-route");
const commentRoute = require("./comment-route");

router.use("/users", userRoute);
router.use("/blogs", blogRoute);
router.use("/comments", commentRoute);

module.exports = router;
