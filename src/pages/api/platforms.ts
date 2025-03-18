import { PaginatedResponse } from "@/features/videogames/domain/entities/paginatedResponse";
import { PlatformI } from "@/features/videogames/domain/entities/platformI";
import { ApiPlatformsRepositoryFactory } from "@/features/videogames/infrastructure/factories/platformRepositoryFactory";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse<PaginatedResponse<PlatformI>>) {
  if (req.method === "GET"){
    let platformsRepository = ApiPlatformsRepositoryFactory("rawgApi");
    let response = await platformsRepository.getAllPlatforms();
    return res.status(200).json(response);
  }
}