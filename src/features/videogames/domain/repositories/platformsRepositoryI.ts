import { PaginatedResponse } from "../entities/paginatedResponse";
import { PlatformI } from "../entities/platformI";


export interface PlatformsRepositoryI {
    getAllPlatforms(): Promise<PaginatedResponse<PlatformI>>;
}