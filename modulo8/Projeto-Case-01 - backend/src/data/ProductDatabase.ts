import BaseDataBase from "../data/BaseDatabase";
import { Product } from "../model/Product";

export class ProductDatabase extends BaseDataBase {

   protected tableName: string = "amaro_products";

   public async createProduct(product: Product): Promise<void> {
      try {
        await ProductDatabase.connection
        .insert({
          id: product.id,
          title: product.title,
          description: product.description
        })
        .into(this.tableName);
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public getProductById = async (id: string) => {
    try {
      const result = await ProductDatabase.connection(this.tableName)
      .select()
      .where({id});
      return result[0];
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
   };

  public getAllProducts = async () => {
    try {
      const result = await ProductDatabase.connection(this.tableName)
      .select()
      return result;
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
  };

}

export default new ProductDatabase()