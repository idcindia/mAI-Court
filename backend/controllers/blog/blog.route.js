const express = require("express");
const router = express.Router();
const blogController = require("./blog.controller");
const checkAuth = require("../../middleware/checkAuth");
const { hasRole } = require("../../middleware/checkRole");


router.post("/create-blog", checkAuth,hasRole("admin"), blogController.createBlog);
router.get("/get-all-blog", blogController.getBlogs);
router.get("/blog-by-id/:id", blogController.getBlogById);
router.put("/update-blog/:id", hasRole("admin"), blogController.updateBlog);
router.delete("/delete-blog/:id", blogController.deleteBlog);

module.exports = router;
