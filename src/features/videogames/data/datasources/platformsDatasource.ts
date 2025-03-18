import { API_KEY, API_URL } from "@/config/config";
import { PaginatedResponseModel } from "../models/paginatedResponseModel";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { PlatformDetailsModel } from "../models/platformDetailsModel";


export interface PlatformsDatasource {
    getPlatforms(): Promise<PaginatedResponseModel<PlatformDetailsModel>>;
}

export class ApiRawgPlatformsDatasource implements PlatformsDatasource {
    async getPlatforms(): Promise<PaginatedResponseModel<PlatformDetailsModel>> {
        const api_key = API_KEY;
        const api_url = API_URL;
        const url = `${api_url}platforms?key=${api_key}`;
        const response = await fetch(url);
        const json = await response.json();
        return json as PaginatedResponse<PlatformDetailsModel>;
    }

}