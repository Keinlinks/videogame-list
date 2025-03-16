import { RawgApiVideogamesRepositoryFactory } from "@/features/videogames/infrastructure/factories/videogamesRepositoryFactory";
import { VideogameSummaryI } from "@/features/videogames/domain/entities/videogame";
import { VideogamesFilter } from "@/features/videogames/domain/entities/videogamesFilter";
import { NextResponse } from "next/server";
import { PaginatedResponse } from "@/features/videogames/domain/entities/paginatedResponse";

export async function GET(req: Request, { params }: { params: { id: string, page:string, page_size:string,search:string } }):Promise<PaginatedResponse> {
  let videogamesRepository = RawgApiVideogamesRepositoryFactory();

  let filters:VideogamesFilter = {
    page: parseInt(params.page) || 1,
    page_size: parseInt(params.page_size) || 10,
    search: params.search,
  };
  return videogamesRepository.getVideogamesList(filters);
}