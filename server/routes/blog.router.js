const express = require("express")
const blogController = require("../controller/blog.controller")
const blogRouter = express.Router()


blogRouter.get("/test", blogController.test)
blogRouter.post("/createpost", blogController.create)
blogRouter.get("/getpost", blogController.getBlog)
blogRouter.put("/update/:slug", blogController.updateblog)
blogRouter.delete("/delete/:slug", blogController.deleteblog)
blogRouter.get("/detail/:slug", blogController.getblogById)
blogRouter.get("/:slug", blogController.getblogById)

module.exports = blogRouter