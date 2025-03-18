import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { PlatformI } from "../../domain/entities/platformI";
import { PlatformsRepositoryI } from "../../domain/repositories/platformsRepositoryI";
import { PlatformsDatasource } from "../datasources/platformsDatasource";


export class PlataformsRepositoryImpl implements PlatformsRepositoryI {
    constructor(private platformsDatasource: PlatformsDatasource) {}
    async getAllPlatforms(): Promise<PaginatedResponse<PlatformI>> {
        return await this.platformsDatasource.getPlatforms();
    }

}