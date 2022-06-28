import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   let statusCode
   try {
      let name = req.query.name

      if(!name) {
         name = "%"
      }

      const users = await connection("aula48_exercicio")
      .where("name", "like", `%${name}%`)

      if(users.length < 1) {
         statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.status(statusCode || 400).send(error.message)
   }
}

export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
   let statusCode
   try {
      let type = req.params.type

      if(!type) {
         type = "%"
      }

      const users = await connection("aula48_exercicio")
      .where("type", "=", `${type}`)

      if(users.length < 1) {
         statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.status(statusCode || 400).send(error.message)
   }
}

export const getAllUsersOrd = async(req: Request,res: Response): Promise<void> =>{
   let statusCode
   try {

      let sort = req.query.sort as string
      let order = req.query.order as string

      if(!sort) {
         sort = "email"
      }

      if(order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC"){
         order = "ACS"
      }

      const users = await connection("aula48_exercicio")
      .orderBy(sort, order)
      .select()

      if(users.length < 1) {
         statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.status(statusCode || 400).send(error.message)
   }
}

export const getAllUsersPag = async(req: Request,res: Response): Promise<void> =>{
   let statusCode
   try {
      let size= Number(req.query.size)
      let page = Number(req.query.page)

      if(isNaN(size) || size < 1) {
         size = 5
      }

      if(isNaN(page) || page < 1) {
         page = 1
      }

      let offset = size * (page - 1)

      const users = await connection("aula48_exercicio")
      .limit(size)
      .offset(offset)
      .select()

      if(users.length < 1) {
         statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.status(statusCode || 400).send(error.message)
   }
}

export const getAllDataUsers = async(req: Request,res: Response): Promise<void> =>{
   let statusCode
   try {
      let name = req.query.name
      let sort = req.query.sort as string
      let order = req.query.order as string
      let size= Number(req.query.size)
      let page = Number(req.query.page)
      let type = req.params.type

      if(isNaN(size) || size < 1) {
         size = 5
      }

      if(isNaN(page) || page < 1) {
         page = 1
      }

      if(!type) {
         type = "%"
      }

      let offset = size * (page - 1)

      if(!sort) {
         sort = "name"
      }

      if(order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC"){
         order = "DESC"
      }

      if(!name) {
         name = "%"
      }

      const users = await connection("aula48_exercicio")
      .where("name", "like", `%${name}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

      if(users.length < 1) {
         statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.status(statusCode || 400).send(error.message)
   }
}

/*
const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}
*/