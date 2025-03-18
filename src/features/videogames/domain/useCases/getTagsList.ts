import { PaginatedResponse } from "../entities/paginatedResponse";
import { TagI } from "../entities/tag";

export function getTagsListUseCase(): Promise<PaginatedResponse<TagI>> {
    return fetch('/api/tags?').then(response => response.json());
}