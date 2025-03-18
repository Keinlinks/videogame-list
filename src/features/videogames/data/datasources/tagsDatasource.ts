import { API_KEY, API_URL } from "@/config/config";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { TagModel } from "../models/tagModel";


export interface TagsDatasource {
    getTagsList(): Promise<PaginatedResponse<TagModel>>;
}

export class ApiRawgTagsDatasource implements TagsDatasource {
    async getTagsList(): Promise<PaginatedResponse<TagModel>> {
        const api_key = API_KEY;
        const api_url = API_URL;
        const url = `${api_url}tags?key=${api_key}`;
        const response = await fetch(url);
        const json = await response.json();
        return json as PaginatedResponse<TagModel>;
    }
}