import { RawgApiVideogamesRepositoryFactory } from "@/features/videogames/infrastructure/factories/videogamesRepositoryFactory";
import { VideogameDetailsI } from "@/features/videogames/domain/entities/videogame";

export async function GET(req: Request, { params }: { params: { id: string } }):Promise<VideogameDetailsI> {
    let videogamesRepository = RawgApiVideogamesRepositoryFactory();
    let id = parseInt(params.id);

  return videogamesRepository.getVideogameById(id);
}