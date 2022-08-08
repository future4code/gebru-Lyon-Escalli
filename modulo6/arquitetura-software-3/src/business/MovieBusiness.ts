import { MovieDatabase } from '../data/MovieDatabase'
import { MissingParameters } from '../error/customError'
import { gerarNovoId } from '../services/generateId'

export class MovieBusiness {
  async create({title, description, duration_in_minutes, year_of_release }: any):Promise<void> {
    if (!title|| !description || !duration_in_minutes || !year_of_release) {
      throw new MissingParameters()
    }

    const id = gerarNovoId

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title, 
      description, 
      duration_in_minutes, 
      year_of_release 
    })
  }

}