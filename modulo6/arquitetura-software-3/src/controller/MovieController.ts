import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { id, title, description, duration_in_minutes, year_of_release } = req.body;

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create({ id, title, description, duration_in_minutes, year_of_release });

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message)
      }
    }
  }
 
}