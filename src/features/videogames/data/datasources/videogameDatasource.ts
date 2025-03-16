import { API_KEY, API_URL } from "@/config/config";
import { VideogamesFilter } from "../../domain/entities/videogamesFilter";
import { PaginatedResponseModel } from "../models/paginatedResponseModel";
import { VideogameDetailsModel } from "../models/videogameModel";

//aqui se pueden agregar clases que implementen la interfaz VideogameDatasource para obtener los datos de diferentes fuentes de datos

export interface VideogameDatasource {
    getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponseModel>;
    getVideogameById(id: number): Promise<VideogameDetailsModel>;
}


export class RawgApiVideogameDatasource implements VideogameDatasource {
    async getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponseModel> {
        let api_key = API_KEY;
        let api_url = API_URL;
        let url = `${api_url}/videogames?api_key=${api_key}&page=${filter.page}&page_size=${filter.page_size}&search=${filter.search}`;
        let response = await fetch(url);
        let json = await response.json();
        return json as PaginatedResponseModel;
    }
    async getVideogameById(id: number): Promise<VideogameDetailsModel> {
        let api_key = API_KEY;
        let api_url = API_URL;
        let url = `${api_url}/videogames/${id}?api_key=${api_key}`;
        let response = await fetch(url);
        let json = await response.json();
        return json as VideogameDetailsModel;
    }
}