import { GenreI } from "../../domain/entities/genres";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { GenresRepositoryI } from "../../domain/repositories/genresRepositoryI";
import { GenresDatasource } from "../datasources/genresDatasource";

export class GenresRepositoryImpl implements GenresRepositoryI {
    constructor(private genresDatasource: GenresDatasource) {}
    async getGenres(): Promise<PaginatedResponse<GenreI>> {
        return this.genresDatasource.getGenresList();
    }

}