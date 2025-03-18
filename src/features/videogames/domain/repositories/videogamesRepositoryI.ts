import { PaginatedResponse } from "../entities/paginatedResponse";
import { VideogameDetailsI, VideogameSummaryI } from "../entities/videogame";
import { VideogamesFilter } from "../entities/videogamesFilter";

export interface VideogamesRepositoryI {
    getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponse<VideogameSummaryI>>;
    getVideogameById(id: number): Promise<VideogameDetailsI | null>;
}

