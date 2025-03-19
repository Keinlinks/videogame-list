import { GenreModel } from "../models/genreModel";
import { PaginatedResponseModel } from "../models/paginatedResponseModel";


export interface GenresDatasource {
    getGenresList(): Promise<PaginatedResponseModel<GenreModel>>;
}

export class ApiRawgGenresDatasource implements GenresDatasource {
    async getGenresList(): Promise<PaginatedResponseModel<GenreModel>> {
        const api_key = process.env.API_KEY;
        const api_url = process.env.API_URL;
        const url = `${api_url}genres?key=${api_key}`;
        const response = await fetch(url);
        const json = await response.json();
        return json as PaginatedResponseModel<GenreModel>;
    }
}