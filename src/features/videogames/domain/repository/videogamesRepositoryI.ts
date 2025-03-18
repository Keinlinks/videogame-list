import { GenreI } from "../entities/genres";
import { PaginatedResponse } from "../entities/paginatedResponse";
import { VideogameDetailsI, VideogameSummaryI } from "../entities/videogame";
import { VideogamesFilter } from "../entities/videogamesFilter";

export interface VideogamesRepositoryI {
    getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponse<VideogameSummaryI>>;
    getVideogameById(id: number): Promise<VideogameDetailsI>;
}

export interface GenresRepositoryI{
    getGenres(): Promise<PaginatedResponse<GenreI>>;
}