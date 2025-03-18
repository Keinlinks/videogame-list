import { API_KEY, API_URL } from "@/config/config";
import { PaginatedResponseModel } from "../models/paginatedResponseModel";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { PlatformDetailsModel } from "../models/platformDetailsModel";


export interface PlatformsDatasource {
    getPlatforms(): Promise<PaginatedResponseModel<PlatformDetailsModel>>;
}

export class ApiRawgPlatformsDatasource implements PlatformsDatasource {
    async getPlatforms(): Promise<PaginatedResponseModel<PlatformDetailsModel>> {
        let api_key = API_KEY;
        let api_url = API_URL;
        let url = `${api_url}platforms?key=${api_key}`;
        let response = await fetch(url);
        let json = await response.json();
        return json as PaginatedResponse<PlatformDetailsModel>;
    }

}