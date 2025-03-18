import { GenreI } from "../../domain/entities/genres";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { GenresRepositoryI } from "../../domain/repositories/genresRepositoryI";
import { GenresDatasource } from "../datasources/genresDatasource";

export class GenresRepositoryImpl implements GenresRepositoryI {
    constructor(private genresDatasource: GenresDatasource) {}
    async getGenres(): Promise<PaginatedResponse<GenreI>> {
        const model = await this.genresDatasource.getGenresList();
        const data:PaginatedResponse<GenreI> = {
            ...model,
            results: model.results.map((item)=>{
                return {...item
                } as GenreI;
              })
        } 
        return data;
    }

}