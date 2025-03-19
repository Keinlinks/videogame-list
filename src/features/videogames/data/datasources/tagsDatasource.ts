import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { TagModel } from "../models/tagModel";


export interface TagsDatasource {
    getTagsList(): Promise<PaginatedResponse<TagModel>>;
}

export class ApiRawgTagsDatasource implements TagsDatasource {
    async getTagsList(): Promise<PaginatedResponse<TagModel>> {
        const api_key = process.env.API_KEY;
        const api_url = process.env.API_URL;
        const url = `${api_url}tags?key=${api_key}`;
        const response = await fetch(url);
        const json = await response.json();
        return json as PaginatedResponse<TagModel>;
    }
}