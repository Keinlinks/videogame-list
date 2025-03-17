import { API_KEY, API_URL } from "@/config/config";
import { VideogamesFilter } from "../../domain/entities/videogamesFilter";
import { PaginatedResponseModel } from "../models/paginatedResponseModel";
import { VideogameDetailsModel } from "../models/videogameModel";
import { videogameListMock, videogameMock } from "./mocks";

//aqui se pueden agregar clases que implementen la interfaz VideogameDatasource para obtener los datos de diferentes fuentes de datos

export interface VideogameDatasource {
    getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponseModel>;
    getVideogameById(id: number): Promise<VideogameDetailsModel>;
}

//clase que implementa la obtencion de data desde la Api Rawg
export class RawgApiVideogameDatasource implements VideogameDatasource {
    async getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponseModel> {
        let api_key = API_KEY;
        let api_url = API_URL;
        let url = `${api_url}games?key=${api_key}&page=${filter.page}&page_size=${filter.page_size}&search=${filter.search}`;
        let response = await fetch(url);
        let json = await response.json();
        return json as PaginatedResponseModel;
    }
    async getVideogameById(id: number): Promise<VideogameDetailsModel> {
        let api_key = API_KEY;
        let api_url = API_URL;
        let url = `${api_url}games/${id}?api_key=${api_key}`;
        let response = await fetch(url);
        let json = await response.json();
        return json as VideogameDetailsModel;
    }
}
//clase para pruebas con mocks
export class VideogameDatasourceMock implements VideogameDatasource {
    getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponseModel> {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let data: PaginatedResponseModel = videogameListMock
                resolve(data);
            },1000);
            
        });
    }
    getVideogameById(id: number): Promise<VideogameDetailsModel> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let data:VideogameDetailsModel = videogameMock
                resolve(data);
            },2000);
        });
    }
    
        
}