import { DeveloperI } from "@/features/videogames/domain/entities/developer";
import { PaginatedResponse } from "@/features/videogames/domain/entities/paginatedResponse";
import { ApiDevelopersRepositoryFactory } from "@/features/videogames/infrastructure/factories/developersRepositoryFactory";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<PaginatedResponse<DeveloperI>>) {
  if (req.method === "GET"){
    let developersRepository = ApiDevelopersRepositoryFactory("rawgApi");
    let response = await developersRepository.getDevelopers();
    return res.status(200).json(response);
  }
}