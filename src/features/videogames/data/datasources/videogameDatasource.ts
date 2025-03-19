import { VideogamesFilter } from "../../domain/entities/videogamesFilter";
import { PaginatedResponseModel } from "../models/paginatedResponseModel";
import { VideogameDetailsModel, VideogameSummaryModel } from "../models/videogameModel";
import { videogameListMock, videogameMock } from "../../../../../assets/videogamesMock";
import { pushQueriesSearchUrl } from "../../utils/utils";

//aqui se pueden agregar clases que implementen la interfaz VideogameDatasource para obtener los datos de diferentes fuentes de datos

export interface VideogameDatasource {
    getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponseModel<VideogameSummaryModel>>;
    getVideogameById(id: number): Promise<VideogameDetailsModel | null>;
}

//clase que implementa la obtencion de data desde la Api Rawg
export class RawgApiVideogameDatasource implements VideogameDatasource {
    async getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponseModel<VideogameSummaryModel>> {
        const api_key = process.env.API_KEY;
        const api_url = process.env.API_URL;
        const url = `${api_url}games?key=${api_key}&${pushQueriesSearchUrl(filter)}`;
        const response = await fetch(url);
        const json = await response.json();
        return json as PaginatedResponseModel<VideogameSummaryModel>;
    }
    async getVideogameById(id: number): Promise<VideogameDetailsModel> {
        const api_key = process.env.API_KEY;
        const api_url = process.env.API_URL;
        const url = `${api_url}games/${id}?key=${api_key}`;
        const response = await fetch(url);
        const json = await response.json();
        return json as VideogameDetailsModel;
    }
}
//clase para pruebas con mocks
export class VideogameDatasourceMock implements VideogameDatasource {
    getVideogamesList(): Promise<PaginatedResponseModel<VideogameSummaryModel>> {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const data: PaginatedResponseModel<VideogameSummaryModel> = videogameListMock
                resolve(data);
            },1000);
            
        });
    }
    getVideogameById(): Promise<VideogameDetailsModel | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data:VideogameDetailsModel = videogameMock
                resolve(data);
            },2000);
        });
    }   
}