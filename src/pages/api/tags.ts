import { PaginatedResponse } from "@/features/videogames/domain/entities/paginatedResponse";
import { TagI } from "@/features/videogames/domain/entities/tag";
import { ApitagsRepositoryFactory } from "@/features/videogames/infrastructure/factories/tagRepositoryFactory";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse<PaginatedResponse<TagI>>) {
  if (req.method === "GET"){
    let genresRepository = ApitagsRepositoryFactory("rawgApi");
    let response = await genresRepository.getTags();
    return res.status(200).json(response);
  }
}