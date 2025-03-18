import { PaginatedResponse } from "@/features/videogames/domain/entities/paginatedResponse";
import { TagI } from "@/features/videogames/domain/entities/tag";
import { ApiTagsRepositoryFactory } from "@/features/videogames/infrastructure/factories/tagRepositoryFactory";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse<PaginatedResponse<TagI>>) {
  if (req.method === "GET"){
    const tagsRepository = ApiTagsRepositoryFactory("rawgApi");
    const response = await tagsRepository.getTags();
    return res.status(200).json(response);
  }
}