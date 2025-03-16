import { PaginatedResponse } from "../entities/paginatedResponse";
import { VideogameDetailsI } from "../entities/videogame";
import { VideogamesFilter } from "../entities/videogamesFilter";

export interface VideogamesRepositoryI {
    getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponse>;
    getVideogameById(id: number): Promise<VideogameDetailsI>;

}