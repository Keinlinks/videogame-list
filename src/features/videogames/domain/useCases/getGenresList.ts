import { GenreI } from "../entities/genres";
import { PaginatedResponse } from "../entities/paginatedResponse";

export function getGenresListUseCase(): Promise<PaginatedResponse<GenreI>> {
    return fetch('/api/genres?').then(response => response.json());
}