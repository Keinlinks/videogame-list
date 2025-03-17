import { VideogameDetailsI } from "@/features/videogames/domain/entities/videogame";
import { ApiVideogamesRepositoryFactory } from "@/features/videogames/infrastructure/factories/videogamesRepositoryFactory";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse<VideogameDetailsI | {message:string}>) {
  if (req.method === "GET"){
  let videogamesRepository = ApiVideogamesRepositoryFactory("mock");
  const { id } = req.query;
  if (id && !Number.isInteger(+id)) return res.status(400).json({message:"id is required"})
  else if (id)
    return videogamesRepository.getVideogameById(+id);
  }
    
}