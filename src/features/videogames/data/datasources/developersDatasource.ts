import { PaginatedResponseModel } from "../models/paginatedResponseModel";
import { DeveloperModel } from "../models/developerModel";


export interface DevelopersDatasource {
    getDevolpersList(): Promise<PaginatedResponseModel<DeveloperModel>>;
}

export class ApiRawgDevelopersDatasource implements DevelopersDatasource {
    async getDevolpersList(): Promise<PaginatedResponseModel<DeveloperModel>> {
        const api_key = process.env.API_KEY;
        const api_url = process.env.API_URL;
        const url = `${api_url}developers?key=${api_key}`;
        const response = await fetch(url);
        const json = await response.json();
        return json as PaginatedResponseModel<DeveloperModel>;
    }
}