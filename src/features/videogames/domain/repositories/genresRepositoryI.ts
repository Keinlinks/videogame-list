import { GenreI } from "../entities/genres";
import { PaginatedResponse } from "../entities/paginatedResponse";

export interface GenresRepositoryI{
    getGenres(): Promise<PaginatedResponse<GenreI>>;
}