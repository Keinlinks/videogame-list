import { PaginatedResponse } from "../entities/paginatedResponse";
import { TagI } from "../entities/tag";

export interface TagsRepositoryI {
    getTags(): Promise<PaginatedResponse<TagI>>;
}