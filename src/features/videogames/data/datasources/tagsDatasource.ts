import { API_KEY, API_URL } from "@/config/config";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { TagModel } from "../models/tagModel";


export interface TagsDatasource {
    getTagsList(): Promise<PaginatedResponse<TagModel>>;
}

export class ApiRawgTagsDatasource implements TagsDatasource {
    async getTagsList(): Promise<PaginatedResponse<TagModel>> {
        let api_key = API_KEY;
        let api_url = API_URL;
        let url = `${api_url}tags?key=${api_key}`;
        let response = await fetch(url);
        let json = await response.json();
        return json as PaginatedResponse<TagModel>;
    }
}