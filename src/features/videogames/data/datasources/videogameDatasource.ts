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

export class VideogameDatasourceMock implements VideogameDatasource {
    getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponseModel> {
        return new Promise((resolve,reject)=>{
            let data: PaginatedResponseModel = {
                count: 10,
                next: null,
                previous: null,
                results:[
                    {
                    "id": 1,
                    "slug": "mario-kart-8-deluxe",
                    "name": "Mario Kart 8 Deluxe",
                    "released": "2025-03-16",
                    "tba": true,
                    "background_image": "https://juegosdigitaleschile.com/files/images/productos/1637861249-mario-kart-8-deluxe-nintendo-switch.jpg",
                    "rating": 0,
                    "rating_top": 0,
                    "ratings": { },
                    "ratings_count": 0,
                    "reviews_text_count": "string",
                    "added": 0,
                    "added_by_status": { },
                    "metacritic": 95,
                    "playtime": 0,
                    "suggestions_count": 0,
                    "updated": "2025-03-16T22:36:15Z",
                    "esrb_rating": {
                    "id": 0,
                    "slug": "everyone",
                    "name": "Everyone"
                    },
                    "platforms":[]
                    }
                    ]
            }
            resolve(data);
        });
    }
    getVideogameById(id: number): Promise<VideogameDetailsModel> {
        throw new Error("Method not implemented.");
    }
        
}