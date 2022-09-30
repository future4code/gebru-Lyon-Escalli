import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { idProductInputDTO, ProductInputDTO } from "../model/Product";

export class ProductController {
  private productBusiness: ProductBusiness
  constructor() {
    this.productBusiness = new ProductBusiness()
  }

      public createProduct = async (req: Request, res: Response) => {
        try {
          
          const input: ProductInputDTO = {
            title: req.body.title,
            description: req.body.description
          }

          await this.productBusiness.createProduct(input)
    
          res.status(201).send({ message: "Produto criado com sucesso!"});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

      public getProductById = async (req: Request, res: Response) => {
        try {
          const input: idProductInputDTO = {
            id: req.params.id
          }
          
          const result = await this.productBusiness.getProductById(input)
    
          res.status(200).send(result);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

      public getAllProducts = async (req: Request, res: Response) => {
        try {

          const result = await this.productBusiness.getAllProducts()
    
          res.status(200).send(result);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

}