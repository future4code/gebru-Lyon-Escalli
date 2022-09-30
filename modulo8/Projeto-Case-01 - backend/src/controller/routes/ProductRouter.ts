import express from "express";

import { ProductController } from "../ProductController";

export const productRouter = express.Router()

const productControl = new ProductController()

productRouter.post('/', productControl.createProduct)
productRouter.get('/all', productControl.getAllProducts)
productRouter.get('/:id', productControl.getProductById)