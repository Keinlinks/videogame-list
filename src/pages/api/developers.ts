import { DeveloperI } from "@/features/videogames/domain/entities/developer";
import { PaginatedResponse } from "@/features/videogames/domain/entities/paginatedResponse";
import { ApiDevelopersRepositoryFactory } from "@/features/videogames/factories/developersRepositoryFactory";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<PaginatedResponse<DeveloperI>>) {
  if (req.method === "GET"){
    const developersRepository = ApiDevelopersRepositoryFactory("rawgApi");
    const response = await developersRepository.getDevelopers();
    return res.status(200).json(response);
  }
}