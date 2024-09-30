const Blog = require("../../models/blog/blog.schema");
const apiResponse = require("../../helper/apiResponse");


exports.createBlog = async (req, res) => {
    console.log(req.userId, "sdfghjkl;")
    try {
        const authorId = req.userId.user.id;
        console.log(authorId, "authorrrrrrrrrrrrrrr")
        const { title, content, categories } = req.body;

        const blog = new Blog({
            title,
            content,
            authorId,
            categories
        });

        await blog.save();

        return apiResponse.successResponseWithData(res, "Blog created successfully", blog);
    } catch (err) {
        console.error("Error creating blog:", err);
        return apiResponse.ErrorResponse(res, "Error creating blog");
    }
};

// Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("authorId", "name email");
    return apiResponse.successResponseWithData(res, "Blogs retrieved successfully", blogs);
  } catch (error) {
    console.error("Error retrieving blogs:", error);
    return apiResponse.ErrorResponse(res, "Failed to retrieve blogs");
  }
};

// Get a specific blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("authorId", "name email");
    if (!blog) {
      return apiResponse.ErrorResponse(res, "Blog not found");
    }
    return apiResponse.successResponseWithData(res, "Blog retrieved successfully", blog);
  } catch (error) {
    console.error("Error retrieving blog:", error);
    return apiResponse.ErrorResponse(res, "Failed to retrieve blog");
  }
};


exports.updateBlog = async (req, res) => {
  try {
    const { title, content, categories } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, categories },
      { new: true }
    );
    if (!blog) {
      return apiResponse.ErrorResponse(res, "Blog not found");
    }
    return apiResponse.successResponseWithData(res, "Blog updated successfully", blog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return apiResponse.ErrorResponse(res, "Blog update failed");
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return apiResponse.notFoundResponse(res, "Blog not found");
    }
    return apiResponse.successResponse(res, "Blog deleted successfully");
  } catch (error) {
    console.error("Error deleting blog:", error);
    return apiResponse.ErrorResponse(res, "Blog deletion failed");
  }
};
