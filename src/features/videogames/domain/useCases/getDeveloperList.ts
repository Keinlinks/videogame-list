import { DeveloperI } from "../entities/developer";
import { PaginatedResponse } from "../entities/paginatedResponse";

export function getDevelopersListUseCase(): Promise<PaginatedResponse<DeveloperI>> {
    return fetch('/api/developers?').then(response => response.json());
}