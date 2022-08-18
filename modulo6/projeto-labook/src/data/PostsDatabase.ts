import { BaseDatabase } from "./BaseDatabase"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export class PostsDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_posts";

  async createPost({ id, photo, description, type, author_id }: any): Promise<void> {
    await PostsDatabase.connection
      .insert({
        id,
        photo, 
        description, 
        type, 
        author_id
      })
      .into(PostsDatabase.TABLE_NAME);
  }

  async getPostbyId({ id }: any): Promise<void> {
    await PostsDatabase.connection("labook_posts")
      .select("*")
      .where(`author_id = ${id}`)
      .then()
      .catch(printError);
  }

  async getFeed(): Promise<void> {
    await PostsDatabase.connection("labook_posts")
      .select("*")
      .then()
      .catch(printError);
  }
}