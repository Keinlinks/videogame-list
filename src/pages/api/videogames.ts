import { VideogamesFilter } from "@/features/videogames/domain/entities/videogamesFilter";
import { PaginatedResponse } from "@/features/videogames/domain/entities/paginatedResponse";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiVideogamesRepositoryFactory } from "@/features/videogames/infrastructure/factories/videogamesRepositoryFactory";
import { VideogameSummaryI } from "@/features/videogames/domain/entities/videogame";

export default async function handler(req: NextApiRequest, res: NextApiResponse<PaginatedResponse<VideogameSummaryI>>) {
  const queries = req.query as any;
  if (req.method === "GET"){
    const videogamesRepository = ApiVideogamesRepositoryFactory("rawgApi");
    const filters = queries as VideogamesFilter;
    const response = await videogamesRepository.getVideogamesList(filters);
    return res.status(200).json(response);
  }
}