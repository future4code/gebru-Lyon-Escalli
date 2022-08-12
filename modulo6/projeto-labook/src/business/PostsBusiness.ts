import { PostsDatabase } from "../data/PostsDatabase"
import { MissingParameters } from "../error/error"
import { gerarNovoId } from "../services/generateId"

export class PostsBusiness {
  async createPost({ photo, description, type, authorId }: any):Promise<void> {
    if (!photo || !description || !type || !authorId) {
      throw new MissingParameters()
    }

    const id = gerarNovoId

    const postDatabase = new PostsDatabase();
    await postDatabase.createPost({
        id,
        photo, 
        description, 
        type, 
        author_id: authorId
    })
  }

  async getPostbyId({ id }: any):Promise<void> {
    if (!id) {
      throw new MissingParameters()
    }
    const postDatabase = new PostsDatabase();
    await postDatabase.getPostbyId({
      id
    })
  }       

  async getFeed():Promise<void> {

    const postDatabase = new PostsDatabase();
    await postDatabase.getFeed()

  }

}