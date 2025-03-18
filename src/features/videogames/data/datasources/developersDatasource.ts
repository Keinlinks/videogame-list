import { API_KEY, API_URL } from "@/config/config";
import { PaginatedResponseModel } from "../models/paginatedResponseModel";
import { DeveloperModel } from "../models/developerModel";


export interface DevelopersDatasource {
    getDevolpersList(): Promise<PaginatedResponseModel<DeveloperModel>>;
}

export class ApiRawgDevelopersDatasource implements DevelopersDatasource {
    async getDevolpersList(): Promise<PaginatedResponseModel<DeveloperModel>> {
        let api_key = API_KEY;
        let api_url = API_URL;
        let url = `${api_url}developers?key=${api_key}`;
        let response = await fetch(url);
        let json = await response.json();
        return json as PaginatedResponseModel<DeveloperModel>;
    }
}