import { ProductDatabase } from "../data/ProductDatabase";
import { AdminUnauthorized, MissingParameters, NotFound, ServerError, Unauthorized } from "../error/CustomError";
import { idProductInputDTO, Product, ProductInputDTO } from "../model/Product";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class ProductBusiness {
  private ProductDB: ProductDatabase
  private idGen: IdGenerator
  private tokenGen: TokenGenerator
  constructor() {
    this.ProductDB =  new ProductDatabase()
    this.idGen = new IdGenerator()
    this.tokenGen = new TokenGenerator()
  }

  public createProduct = async (input: ProductInputDTO) => {
    try {
      const {title, description} = input

      if (!title || !description) {
        throw new MissingParameters();
      }

      const id = this.idGen.generate()

      const product: Product = {
        id,
        title,
        description
      }

      await this.ProductDB.createProduct(product)

    } catch (error: any) {
      throw new ServerError();
    }
  };

  public getProductById = async (input: idProductInputDTO) => {
    try {
      let {id} = input

      if (!id) {
        throw new MissingParameters();
      }

      const result = await this.ProductDB.getProductById(id)
      if(result.length < 1) {
        throw new NotFound();
      }

      const product = {
        id: result.id,
        title: result.title,
        description: result.description
      }

      return product

    } catch (error: any) {
        throw new ServerError();
    }
  };

  public getAllProducts = async () => {
    try {

      const result = await this.ProductDB.getAllProducts()
      if(result.length < 1) {
        throw new NotFound();
      }

      return result
      
    } catch (error: any) {
        throw new ServerError();
    }
  };
  
}