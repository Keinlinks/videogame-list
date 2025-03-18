import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { PlatformDetailsI } from "../../domain/entities/platformDetail";
import { PlatformI } from "../../domain/entities/platformI";
import { PlatformsRepositoryI } from "../../domain/repositories/platformsRepositoryI";
import { PlatformsDatasource } from "../datasources/platformsDatasource";


export class PlataformsRepositoryImpl implements PlatformsRepositoryI {
    constructor(private platformsDatasource: PlatformsDatasource) {}
    async getAllPlatforms(): Promise<PaginatedResponse<PlatformDetailsI>> {
        let data = await this.platformsDatasource.getPlatforms();
        data.results = data.results.map((item)=>{
            return {...item
            } as PlatformI;
          });
        return data;
    }
}