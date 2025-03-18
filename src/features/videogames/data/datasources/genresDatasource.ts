import { API_KEY, API_URL } from "@/config/config";
import { GenreModel } from "../models/genreModel";
import { PaginatedResponseModel } from "../models/paginatedResponseModel";


export interface GenresDatasource {
    getGenresList(): Promise<PaginatedResponseModel<GenreModel>>;
}

export class ApiRawgGenresDatasource implements GenresDatasource {
    async getGenresList(): Promise<PaginatedResponseModel<GenreModel>> {
        let api_key = API_KEY;
        let api_url = API_URL;
        let url = `${api_url}genres?key=${api_key}`;
        let response = await fetch(url);
        let json = await response.json();
        return json as PaginatedResponseModel<GenreModel>;
    }
}