import { PaginatedResponse } from "../entities/paginatedResponse";
import { PlatformI } from "../entities/platformI";

export function getPlatformsListUseCase(): Promise<PaginatedResponse<PlatformI>> {
    return fetch('/api/platforms?').then(response => response.json());
}