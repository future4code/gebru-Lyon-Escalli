import express from 'express'
import { PostsController } from '../controller/PostsController'

export const postRouter = express.Router()

const postController = new PostsController()

postRouter.post("/post", postController.createPost)
postRouter.get("/posts/:id", postController.getPostbyId)
postRouter.get("/feed/:id", postController.getFeed)