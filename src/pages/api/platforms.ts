import { PaginatedResponse } from "@/features/videogames/domain/entities/paginatedResponse";
import { PlatformI } from "@/features/videogames/domain/entities/platformI";
import { ApiPlatformsRepositoryFactory } from "@/features/videogames/factories/platformRepositoryFactory";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse<PaginatedResponse<PlatformI>>) {
  if (req.method === "GET"){
    const platformsRepository = ApiPlatformsRepositoryFactory("rawgApi");
    const response = await platformsRepository.getAllPlatforms();
    return res.status(200).json(response);
  }
}