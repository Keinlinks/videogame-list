import { VideogameDetailsI } from "@/features/videogames/domain/entities/videogame";
import { ApiVideogamesRepositoryFactory } from "@/features/videogames/infrastructure/factories/videogamesRepositoryFactory";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<VideogameDetailsI | {message:string}>) {
  if (req.method === "GET"){
  const videogamesRepository = ApiVideogamesRepositoryFactory("rawgApi");
  const { id } = req.query;
  if (id && !Number.isInteger(+id)) return res.status(400).json({message:"id is required"})
  else if (id){
    const response = await videogamesRepository.getVideogameById(+id);
    if (!response) return res.status(404).json({message:"Videogame not found"});
    return res.status(200).json(response);
  }
  }
    
}