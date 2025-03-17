const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const authJwt = require("../middlewares/auth.middleware");
const { upload, uploadToFirebase } = require("../middlewares/file.midleware");

//http://localhost:5000/api/v1/post
router.post("/", authJwt.verifyToken, upload, uploadToFirebase, postController.createPost);

//http://localhost:5000/api/v1/post
router.get("", postController.getPosts);

//http://localhost:5000/api/v1/post/id
router.get("/:id", postController.getPostById);

//http://localhost:5000/api/v1/post/owner/id
router.get("/owner/:id", postController.getPostByOwner);

//http://localhost:5000/api/v1/post/id
router.put("/:id", authJwt.verifyToken, upload, uploadToFirebase, postController.updatePost);

//http://localhost:5000/api/v1/post/id
router.delete("/:id", authJwt.verifyToken, postController.deletePost);

module.exports = router;
