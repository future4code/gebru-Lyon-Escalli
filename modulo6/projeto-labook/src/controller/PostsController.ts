import { Request, Response } from "express";
import { PostsBusiness } from "../business/PostsBusiness";
import { PostsInputDTO } from "../model/PostsInputDTO";
import { UserIdDTO } from "../model/UserIdDTO";

export class PostsController {
  async createPost(req: Request, res: Response):Promise<void> {
    try {
      const {  photo, description, type, authorId } = req.body;

      const input: PostsInputDTO = {
        photo, 
        description, 
        type, 
        authorId
      }

      const postBusiness = new PostsBusiness();
      await postBusiness.createPost(input);

      res.status(201).send({ message: "Post criado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }

  async getPostbyId(req: Request, res: Response):Promise<void> {
    try {
      const { id } = req.body;

      const input: UserIdDTO = {
        id
      }

      const postBusiness = new PostsBusiness();
      await postBusiness.getPostbyId(input);

      res.status(201).send(postBusiness);
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }

  async getFeed(req: Request, res: Response):Promise<void> {
    try {

        const postBusiness = new PostsBusiness();
        await postBusiness.getFeed();

      res.status(201).send(postBusiness);
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }

}