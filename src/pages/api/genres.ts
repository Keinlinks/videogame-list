import { GenreI } from "@/features/videogames/domain/entities/genres";
import { PaginatedResponse } from "@/features/videogames/domain/entities/paginatedResponse";
import { ApiGenresRepositoryFactory } from "@/features/videogames/factories/genreRepositoryFactory";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse<PaginatedResponse<GenreI>>) {
  if (req.method === "GET"){
    const genresRepository = ApiGenresRepositoryFactory("rawgApi");
    const response = await genresRepository.getGenres();
    return res.status(200).json(response);
  }
}