import { RawgApiVideogamesRepositoryFactory,VideogameRepositoryFactoryMock } from "@/features/videogames/infrastructure/factories/videogamesRepositoryFactory";
import { VideogamesFilter } from "@/features/videogames/domain/entities/videogamesFilter";
import { PaginatedResponse } from "@/features/videogames/domain/entities/paginatedResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<PaginatedResponse>) {
  let queries = req.query as any;
  if (req.method === "GET"){
    let videogamesRepository = VideogameRepositoryFactoryMock();
    let filters = queries as VideogamesFilter;
    let response = await videogamesRepository.getVideogamesList(filters);
    return res.status(200).json(response);
  }
}